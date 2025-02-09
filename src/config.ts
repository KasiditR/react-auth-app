const config = {
  GOOGLE_CLIENT_ID: import.meta.env.VITE_GOOGLE_CLIENT_ID as string || '',
  GOOGLE_SECRET: import.meta.env.VITE_GOOGLE_SECRET as string || '',
};

export default config;
