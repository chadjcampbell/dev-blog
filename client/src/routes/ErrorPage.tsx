import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">
          Error 404 - Page Not Found
        </h1>
        <p className="text-gray-600 mb-10">
          Oops! The page you are looking for does not exist.
        </p>
        <Link
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          to="/"
        >
          Return home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
