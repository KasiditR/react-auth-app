import config from '@/config';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import { useNavigate } from 'react-router';
import type { AuthModel } from './authModel';

export const Facebook = () => {
  const [authModel, setAuthModel] = useState<AuthModel>({});
  const navigate = useNavigate();

  const handleFacebookSuccess = (response: any) => {
    console.log('Facebook Login Success:', response);
    if (!response.authResponse) {
      return;
    }

    const getUserProfile = async (accessToken: string) => {
      try {
        const tokenInfoResponse = await axios.get(
          `https://graph.facebook.com/me?access_token=${accessToken}&fields=id,name,email,picture,first_name,last_name`
        );

        const profileData = tokenInfoResponse.data;

        setAuthModel({
          id: profileData.id,
          firstName: profileData.first_name,
          lastName: profileData.last_name,
          fullName: profileData.name,
          email: profileData.email,
          picture: profileData.picture.data.url,
        });

        console.log('getUserProfile:', tokenInfoResponse.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
      }
    };

    getUserProfile(response.authResponse.accessToken);
  };

  const handleFacebookError = (error: any) => {
    console.error('Facebook Login Error:', error);
  };

  useEffect(() => {
    if (Object.keys(authModel).length <= 0) {
      return;
    }

    navigate('/home');

    localStorage.setItem('profile', JSON.stringify(authModel));
  }, [authModel]);

  return (
    <FacebookProvider appId={config.FACEBOOK_APP_ID}>
      <div className="justify-center text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2">
        <LoginButton
          scope="public_profile,email"
          onSuccess={handleFacebookSuccess}
          onError={handleFacebookError}
        >
          <div className="flex">
            <svg
              className="w-4 h-4 me-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 8 19"
            >
              <path
                fill-rule="evenodd"
                d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                clip-rule="evenodd"
              />
            </svg>
            Sign in with Facebook
          </div>
        </LoginButton>
      </div>
    </FacebookProvider>
  );
};
