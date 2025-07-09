const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 font-inter">
      <div className="bg-bg_surah_card dark:bg-dark_bg_surah_card rounded-3xl shadow-xl p-8 sm:p-12 text-center max-w-md w-full border border-border_color">
        {/* Large 404 text */}
        <h1 className="text-8xl sm:text-9xl font-extrabold text-indigo-600 drop-shadow-lg mb-4">
          404
        </h1>

        {/* Page Not Found message */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-500 mb-4">
          Page Not Found
        </h2>

        {/* Descriptive message */}
        <p className="text-lg text-gray-600 leading-relaxed mb-8">
          Oops! It looks like the page you&apos;re trying to reach doesn&apos;t
          exist or has been moved. Don&apos;t worry, we&apos;ll help you get
          back on track.
        </p>

        {/* Go Home button */}
        <a
          href="/" // Link back to the homepage
          className="inline-flex items-center px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full shadow-md hover:bg-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          aria-label="Go to homepage"
        >
          Go Home
          {/* Simple right arrow icon using SVG for a clean look */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
