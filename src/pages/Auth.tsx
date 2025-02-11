import Container from '@/components/main/Container';
import { Google } from '@/components/auth/google';
import { Github } from '@/components/auth/github';
// import { Facebook } from '@/components/auth/facebook';
// import { LinkedIn } from '@/components/auth/linkedin';

const Auth = () => {
  return (
    <div className="flex h-screen justify-center items-center px-4">
      <Container className="max-w-3xl w-full flex flex-col lg:flex-row bg-white dark:bg-gray-800 shadow-lg rounded-xl overflow-hidden">
        {/* Left Side - Illustration */}
        <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center p-6">
          <img
            src="Illustrations.png"
            className="max-w-full h-auto"
            alt="Illustration"
          />
        </div>

        {/* Right Side - Authentication Box */}
        <div className="w-full lg:w-1/2 p-8 flex flex-col justify-center">
          <h5 className="text-3xl font-semibold text-gray-900 dark:text-white text-center">
            Sign In
          </h5>
          <p className="text-sm text-gray-600 dark:text-gray-400 text-center mt-2">
            Access your account using one of the methods below.
          </p>

          <div className="mt-6 flex flex-col gap-4">
            <Google />
            <Github />
            {/* <Facebook /> */}
            {/* <LinkedIn /> */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Auth;
