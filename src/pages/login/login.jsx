import React from 'react'

const Login = () => {

  return (
    <div className="flex items-center justify-center min-h-screen bg-sky-800" id='login-register'>
      <div className="w-[375px] sm:w-[500px] bg-[rgba(255,255,255,0.12)] backdrop-blur-sm rounded-lg shadow-md p-8">
        <h2 className="text-[40px] font-bold text-center text-gray-800 mb-6 text-sky-200">Log in</h2>
        <form>

          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold text-white mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold text-white mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember"
                className="ml-2 block text-sm text-white"
              >
                Remember me
              </label>
            </div>
            <a
              href="?"
              className="text-sm text-sky-200 text-shadow-custom hover:underline focus:outline-none"
            >
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Log in
          </button>
        </form>

        <p className="text-sm text-center text-white mt-6">
          Don't have an account?{' '}
          <a href="/register" className="text-sky-200 hover:underline text-shadow-custom">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login