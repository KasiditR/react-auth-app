import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { useEffect, useState } from 'react';
// import { Navigate } from 'react-router';
import config from '@/config';

export const Google = () => {
  const login = useGoogleLogin({
    onSuccess: credentialResponse => console.log(credentialResponse),
    onError: () => console.log('Login Failed'),
    flow: 'auth-code',
    ux_mode: 'redirect',
    redirect_uri: 'http://localhost:5173/api/google/callback',
  });
  return (
    <button className="bg-blue-400" onClick={login}>
      Google Login
    </button>
  );
};

export const GoogleCallBack = () => {
  const [response, setResponse] = useState<any[]>([]);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');

    console.log('Authorization Code:', code);

    const getUserProfile = async (code: string) => {
      const tokenResponse = await axios.post(
        'https://oauth2.googleapis.com/token',
        null,
        {
          params: {
            client_id: config.GOOGLE_CLIENT_ID,
            client_secret: config.GOOGLE_SECRET,
            code: code,
            grant_type: 'authorization_code',
            redirect_uri: 'http://localhost:5173/api/google/callback',
          },
        }
      );

      const tokenInfoResponse = await axios.get(
        `https://oauth2.googleapis.com/tokeninfo?id_token=${tokenResponse.data.id_token}`
      );

      const userInfoResponse = await axios.get(
        'https://www.googleapis.com/oauth2/v2/userinfo',
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.data.access_token}`,
          },
        }
      );

      setResponse([tokenInfoResponse.data, userInfoResponse.data]);
    };

    getUserProfile(code as string);
  }, []);

  return (
    <>
      {response.map((element, index) => (
        <ul key={index}>
          {Object.entries(element).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value as string}
            </li>
          ))}
          <hr />
        </ul>
      ))}
    </>
  );
};
