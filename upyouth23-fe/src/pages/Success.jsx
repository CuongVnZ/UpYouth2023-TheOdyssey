import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <svg className="mx-auto h-12 w-12 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M19.707,2.293c0.391-0.391,0.391-1.023,0-1.414c-0.391-0.391-1.023-0.391-1.414,0L8,11.586L3.707,7.293
          c-0.391-0.391-1.023-0.391-1.414,0c-0.391,0.391-0.391,1.023,0,1.414l5,5C7.488,13.902,7.744,14,8,14s0.512-0.098,0.707-0.293l11-11
          C20.098,3.316,20.098,2.684,19.707,2.293z"/>
        </svg>
        <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
          Thank you for your donation!
        </h2>
        <p className="mt-4 text-center text-gray-600">
          Your contribution will make a difference in our campaign.
        </p>
        <div className="mt-8">
          <div className="rounded-md shadow">
            <Link to="/profile" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:shadow-outline-green transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
              Go to your profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
