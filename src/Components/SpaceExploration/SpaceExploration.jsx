import React from 'react';

export function SpaceExploration() {
  return (
    <div className="container mx-auto px-4 py-8 mb-20 mt-20">
      <h1 className="text-3xl font-bold mb-6 text-left border-b-2 border-gray-200 hover:scale-105 transition ease-in-out duration-300" >Space Exploration</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4">
          <p className="text-gray-700 text-left">
          Space exploration studies outer space using technology and research, expanding our understanding of the universe and fostering scientific innovation and global cooperation. AnuBrahman covered the part of information on the Resonant Ballet of HD 110067s Pristine Planetary System, Space Planes, Potential for Habitable Environments and Sunbeams to Earth. Human missions have included orbital flights, lunar landings, and potential future missions to Mars and beyond which will also be a part of our segments in near forthcoming editions.


            </p>
        </div>
        <div className="md:w-1/2 md:pl-4 group">
          <img
            src="/Images/SpaceExploration1.jpeg"
            alt="About Us"
            className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
}
