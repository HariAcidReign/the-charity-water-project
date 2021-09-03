import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../partials/Header';

function SignIn() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">

        <section className="bg-gradient-to-b from-gray-100 to-white">
          <div className="max-w-6xl px-4 mx-auto sm:px-6">
            <div className="pt-32 pb-12 md:pt-40 md:pb-20">

              {/* Page header */}
              <div className="max-w-3xl pb-12 mx-auto text-center md:pb-20">
                <h1 className="h1">Welcome back. We exist to make human lives easier.</h1>
              </div>

              {/* Form */}
              <div className="max-w-sm mx-auto">
                <form>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="email">Email</label>
                      <input id="email" type="email" className="w-full text-gray-800 form-input" placeholder="Enter your email address" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="block mb-1 text-sm font-medium text-gray-800" htmlFor="password">Password</label>
                        <Link to="reset-password" className="text-sm font-medium text-blue-600 hover:underline">Having trouble signing in?</Link>
                      </div>
                      <input id="password" type="password" className="w-full text-gray-800 form-input" placeholder="Enter your password" required />
                    </div>
                  </div>
                  <div className="flex flex-wrap mb-4 -mx-3">
                    <div className="w-full px-3">
                      <div className="flex justify-between">
                        <label className="flex items-center">
                          <input type="checkbox" className="form-checkbox" />
                          <span className="ml-2 text-gray-600">Keep me signed in</span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap mt-6 -mx-3">
                    <div className="w-full px-3">
                      <button className="w-full text-white bg-blue-600 btn hover:bg-blue-700">Sign in</button>
                    </div>
                  </div>
                </form>
                <div className="flex items-center my-6">
                  <div className="flex-grow mr-3 border-t border-gray-300" aria-hidden="true"></div>
                  <div className="italic text-gray-600">Or</div>
                  <div className="flex-grow ml-3 border-t border-gray-300" aria-hidden="true"></div>
                </div>
                <form>
                  <div className="flex flex-wrap -mx-3">
                    <div className="w-full px-3">
                      <button className="relative flex items-center w-full px-0 text-white bg-red-600 btn hover:bg-red-700">
                        <svg className="flex-shrink-0 w-4 h-4 mx-4 text-white opacity-75 fill-current" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" />
                        </svg>
                        <span className="flex-auto pl-16 pr-8 -ml-16">Continue with Google</span>
                      </button>
                    </div>
                  </div>
                </form>
                <div className="mt-6 text-center text-gray-600">
                  Don’t you have an account? <Link to="/signup" className="text-blue-600 transition duration-150 ease-in-out hover:underline">Sign up</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>

    </div>
  );
}

export default SignIn;