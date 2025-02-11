import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import config from '@/config';
import type { AuthModel } from './authModel';

export const Google = () => {
  const login = useGoogleLogin({
    onSuccess: credentialResponse => console.log(credentialResponse),
    onError: () => console.log('Login Failed'),
    flow: 'auth-code',
    ux_mode: 'redirect',
    redirect_uri: `${config.FRONT_END_BASE_URL}/auth/google/callback`,
  });
  return (
    <button
      type="button"
      className="justify-center text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
      onClick={login}
    >
      <svg
        className="w-4 h-4 me-2"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 18 19"
      >
        <path
          fill-rule="evenodd"
          d="M8.842 18.083a8.8 8.8 0 0 1-8.65-8.948 8.841 8.841 0 0 1 8.8-8.652h.153a8.464 8.464 0 0 1 5.7 2.257l-2.193 2.038A5.27 5.27 0 0 0 9.09 3.4a5.882 5.882 0 0 0-.2 11.76h.124a5.091 5.091 0 0 0 5.248-4.057L14.3 11H9V8h8.34c.066.543.095 1.09.088 1.636-.086 5.053-3.463 8.449-8.4 8.449l-.186-.002Z"
          clip-rule="evenodd"
        />
      </svg>
      Sign in with Google
    </button>
  );
};

export const GoogleCallBack = () => {
  const [authModel, setAuthModel] = useState<AuthModel>({});
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    const getUserProfile = async (code: string) => {
      try {
        const tokenResponse = await axios.post(
          'https://oauth2.googleapis.com/token',
          null,
          {
            params: {
              client_id: config.GOOGLE_CLIENT_ID,
              client_secret: config.GOOGLE_SECRET,
              code: code,
              grant_type: 'authorization_code',
              redirect_uri: `${config.FRONT_END_BASE_URL}/auth/google/callback`,
            },
          }
        );

        const userResponse = await axios.get(
          `${config.BACK_END_BASE_URL}/auth/google/get-user-data/${tokenResponse.data.id_token}`
        );

        const profileData = userResponse.data;

        setAuthModel({
          id: profileData.id,
          firstName: profileData.firstName,
          lastName: profileData.lastName,
          fullName: profileData.fullName,
          email: profileData.email,
          picture: profileData.picture,
        });
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    if (code) {
      getUserProfile(code);
    }
  }, []);

  useEffect(() => {
    if (Object.keys(authModel).length > 0) {
      navigate('/home');

      localStorage.setItem('profile', JSON.stringify(authModel));
    }
  }, [authModel]);

  return <></>;
};
