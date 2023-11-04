import React from "react";

function Portfolio() {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-gray-800 font-semibold">Portfolio</h2>
        
        <div className="flex flex-wrap justify-center text-center mt-8">
          <div className="w-full md:1/2 lg:w-1/3 px-4 pb-8">
            <div className="bg-white rounded-lg p-5 shadow-md">
              <p className="text-gray-600">Amazing Service I'm sp excited</p>
              <p className="text-gray-800 font-semibold mt-4">Tollway</p>
            </div>
          </div>

          <div className="w-full md:1/2 lg:w-1/3 px-4 pb-8">
            <div className="bg-white rounded-lg p-5 shadow-md">
              <p className="text-gray-600">Amazing Service I'm sp excited</p>
              <p className="text-gray-800 font-semibold mt-4">gpdplc</p>
            </div>
          </div>

          <div className="w-full md:1/2 lg:w-1/3 px-4 pb-8">
            <div className="bg-white rounded-lg p-5 shadow-md">
              <p className="text-gray-600">Amazing Service I'm sp excited</p>
              <p className="text-gray-800 font-semibold mt-4">Micro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
