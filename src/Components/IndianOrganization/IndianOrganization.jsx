import React from 'react';

export function IndianOrganization() {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-left border-b-2 border-gray-200 hover:scale-105 transition ease-in-out duration-300" >Indian Organisation</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4">
          <p className="text-gray-700 text-left">
          When discussing Indian organizations in the context of AnuBrahman , it's important to cover a diverse range of topics and updates related to the aerospace industry in India which is a great initiative from our side . Our team delved into the articles of the successful missions - Gaganyaan, Unveiling the processes of Aditya-L1 , GSLV-F14-INSAT-3Ds , Rohini Launch and many more through the dedication towards aerospace sector to spread about the important inputs worldwide . This section showcases India's remarkable strides in space exploration and satellite technology, highlighting the significant endeavors of Indian organizations at scientific discovery and technological innovation.


            </p>
        </div>
        <div className="md:w-1/2 md:pl-4 group">
          <img
            src="/Images/About.jpeg"
            alt="About Us"
            className="rounded-lg shadow-lg group-hover:brightness-75 transition ease-in-out duration-300"
          />
        </div>
      </div>
    </div>
  );
}
