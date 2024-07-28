import React from 'react';

export function Aviation() {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-left hover:scale-105 transition ease-in-out duration-300 border-b-2 border-gray-200">Aviation</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-start">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4 ">
          <div className="text-gray-700 text-left mt-24 max-w-[50ch] leading-relaxed">
          The early efforts showcase human ingenuity and the desire to conquer the skies The team introduced sections by researching their concepts on Vymanika Shastra, Meghadhwani's Celestial Lullaby, Mercury Vortex Engine which justifies the MYTH Vs REALITY in the ancient aviation.It's important to note that ancient aviation, while intriguing, does not encompass the sophisticated achievements and advancements that define modern aviation, which emerged with the invention of powered aircraft in the 20th century.
          </div>
        </div>
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <div className="group">
            <img
              src="/Images/Aviation_1.jpeg"
              alt="Aviation 1"
              className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
            />
          </div>
          <div className="group">
            <img
              src="/Images/Aviation_2.jpeg"
              alt="Aviation 2"
              className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
            />
          </div>
          <div className="group">
            <img
              src="/Images/Aviation_3.jpeg"
              alt="Aviation 3"
              className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
            />
          </div>
          <div className="group">
            <img
              src="/Images/Aviation_4.jpeg"
              alt="Aviation 4"
              className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
