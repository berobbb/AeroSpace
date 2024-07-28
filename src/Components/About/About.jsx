import React from 'react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-8 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-left border-b-2 border-gray-200 hover:scale-105 transition ease-in-out duration-300" >What is AnuBrahman?</h1>
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-4">
          <p className="text-gray-700 text-left">
          AnuBrahman, like the cosmos it explores, spans everything from the tiniest atom (Anu) to the vast unknown (Brahmand). We delve into astrophysics' mysteries and spacefaring controversies. From ancient stargazers to modern telescopes, we trace humanity's journey to understand the cosmos. AnuBrahman covers it all: global defense advancements, supersonic jets, and our nation's own aerospace triumphs. It's a universe of wonder, explored one atom at a time. AnuBrahman embarks on this grand adventure, guiding you from the tiniest particle that ignites the stars to the furthest corners of a universe waiting to be discovered. It's a thrilling saga of science, where the language of atoms translates into the awe-inspiring choreography of the celestial bodies. 
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
