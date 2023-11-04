import React from "react";

function InfoOne() {
  return (
    <div className="container mx-auto flex items-center py-16">
      <div className="w-1/2 px-6">
        <div className="text-3xl font-semibold">Welcome to my Website</div>
        <p className="text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia omnis,
          unde ipsum quibusdam quis blanditiis sapiente dolorem dolores maxime,
          repudiandae dolor quasi deleniti, nam recusandae ex pariatur ad iure
          voluptatem!
        </p>
      </div>
      <div className="w-1/2">
        <img
          src="https://images.unsplash.com/photo-1548630826-2ec01a41f48f?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
}

export default InfoOne;
