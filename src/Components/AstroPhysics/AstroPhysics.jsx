import React from 'react'

export function AstroPhysics() {
  return (
    <>
     <h1 className="text-3xl font-bold mb-6 text-left hover:scale-105 transition ease-in-out duration-300 border-b-2 border-gray-200 mb-8">AstroPhysics</h1>
     <div className=' flex justify-between'>
    <div className="w-[300px] rounded-md border">
         
      <img
        src="/Images/AstroPhysics1.jpeg"
        alt="Laptop"
        className="h-[200px] w-full rounded-md object-cover"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold">About AstroPhysics</h1>
        <p className="mt-3 text-sm text-gray-600">
        Our team covered a vast range of information about Binary star, Stellar Sulphur Caper, Black holes and Dark Energy
        </p>
        <button
          type="button"
          className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Read
        </button>
      </div>
    </div>
    <div className="w-[300px] rounded-md border">
         
         <img
           src="/Images/AstroPhysics3.jpeg"
           alt="Laptop"
           className="h-[200px] w-full rounded-md object-cover"
         />
         <div className="p-4">
           <h1 className="text-lg font-semibold">About AstroPhysics</h1>
           <p className="mt-3 text-sm text-gray-600">
           We uncover its role in the accelerating expansion of the cosmos,reshaping our understanding of the fundamental forces governing the universe's evolution.
           </p>
           <button
             type="button"
             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
           >
             Read
           </button>
         </div>
       </div>
       <div className="w-[300px] rounded-md border">
         
         <img
           src="/Images/AstroPhysics2.jpeg"
           alt="Laptop"
           className="h-[200px] w-full rounded-md object-cover"
         />
         <div className="p-4">
           <h1 className="text-lg font-semibold">About AstroPhysics</h1>
           <p className="mt-3 text-sm text-gray-600">
           Astrophysics contributes to our understanding of the universe and its evolution over time.

           </p>
           <button
             type="button"
             className="mt-4 rounded-sm bg-black px-2.5 py-1 text-[10px] font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
           >
             Read
           </button>
         </div>
       </div>
    </div>
    </>
  )
}
