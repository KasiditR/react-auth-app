const config = {
  GOOGLE_CLIENT_ID: (import.meta.env.VITE_GOOGLE_CLIENT_ID as string) || '',
  GOOGLE_SECRET: (import.meta.env.VITE_GOOGLE_SECRET as string) || '',
  FACEBOOK_APP_ID: (import.meta.env.VITE_FACEBOOK_APP_ID as string) || '',
  GITHUB_CLIENT_ID: (import.meta.env.VITE_GITHUB_CLIENT_ID as string) || '',
  GITHUB_SECRET: (import.meta.env.VITE_GITHUB_SECRET as string) || '',
  BACK_END_BASE_URL: (import.meta.env.VITE_BACK_END_BASE_URL as string) || '',
  FRONT_END_BASE_URL: (import.meta.env.VITE_FRONT_END_BASE_URL as string) || '',
};

export default config;
