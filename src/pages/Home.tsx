import { AuthModel } from '@/components/auth/authModel';
import Container from '@/components/main/Container';
import { useNavigate } from 'react-router';
import ParticlesComponent from '@/components/particles';

const Home = () => {
  const profileString = localStorage.getItem('profile');
  const profile: AuthModel | null = profileString
    ? JSON.parse(profileString)
    : null;

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/');
    localStorage.removeItem('profile');
    window.location.reload();
  };

  return (
    <>
      <ParticlesComponent />
      <Container className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-50 ">
        <h2 className="text-2xl md:text-4xl font-extrabold dark:text-white pb-10">
          {`Welcome ${profile?.firstName} 👋`}
        </h2>
        <div className="z-10 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative pt-10">
          <div className="absolute inset-0 -z-10 bg-cover bg-center rounded-t-lg bg-[url(/paul-earle.jpg)] object-cover h-25" />
          <div className="p-6">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row justify-center gap-4 mb-8 dark:bg-gray-800 md:w-fit rounded-t-xl px-6 pt-2">
              <img
                src={profile?.picture}
                alt="Profile Picture"
                referrerPolicy="no-referrer"
                className="w-16 h-16 rounded-full border-2 border-gray-700 mx-auto md:mx-0"
              />
              <div className="text-center md:text-left">
                <h2 className="text-sm sm:text-xl md:text-2xl font-semibold text-white">
                  {profile?.fullName}
                </h2>
                <p className="text-xs sm:text-sm md:text-base lg:text-lg block text-gray-400">
                  {`ID:  ${profile?.id}`}
                </p>
              </div>
            </div>

            {/* Name Fields */}
            <hr className="h-px mt-1 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="pt-2 space-y-4 justify flex">
              <label htmlFor="" className="me-2 text-white pt-2 w-1/3">
                Name
              </label>
              <div className="flex mb-3 gap-3 w-2/3">
                <input
                  type="text"
                  id="first_name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={profile?.firstName}
                  disabled
                />
                {profile?.lastName && (
                  <input
                    type="text"
                    id="last_name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={profile?.lastName}
                    disabled
                  />
                )}
              </div>
            </div>

            {/* Email Fields */}
            <hr className="h-px mt-1 bg-gray-200 border-0 dark:bg-gray-700" />
            <div className="pt-2 space-y-4 justify flex">
              <label htmlFor="" className="me-2 text-white pt-2 w-1/3">
                Email
              </label>
              <div className="mb-6 w-2/3">
                <input
                  type="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  value={profile?.email}
                  disabled
                />
              </div>
            </div>
            {/* Buttons */}
            <div className="mt-6 flex justify-center">
              <button
                type="button"
                className="w-full text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
                onClick={handleBack}
              >
                Back
              </button>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;
