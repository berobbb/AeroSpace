import React from 'react';

export function Defence() {
  return (
    <div className="container mx-auto px-4 py-8"> <h1 className="text-3xl font-bold  text-left border-b-2 border-gray-200 hover:scale-105 transition ease-in-out duration-300 mb-8" >Defence</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start space-y-6 md:space-y-0 md:space-x-6">
        <div className="md:w-2/3">
          <img
            src="/Images/Defence2.jpeg"
            alt="Defence Main"
            className="w-full h-auto rounded-lg shadow-lg mb-4 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <div className="md:w-1/3 flex flex-col space-y-6">
          <div className="flex flex-col items-center">
            <img
              src="/Images/Defence1.jpeg"
              alt="Defence 1"
              className="w-full h-auto rounded-lg shadow-lg mb-2 transform transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-700 text-left">
            Defense leverages aerospace technologies for military purposes, focusing on border security, tactical operations, intelligence gathering and strategic deterrence
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              src="/Images/Defence3.jpeg"
              alt="Defence 2"
              className="w-full h-auto rounded-lg shadow-lg mb-2 transform transition-transform duration-300 hover:scale-105"
            />
            <p className="text-gray-700 text-left">
            We covered the successful articles of Drishti-10, Mission Divyastra, Tejas and the most remarkable RUDRAM integrated with SU-30 MKI.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
