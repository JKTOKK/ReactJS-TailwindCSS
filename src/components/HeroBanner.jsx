import React from "react";

function HeroBanner() {
  return (
    <div className="bg-gray-900 text-white py-16">
      <div className="container mx-auto text-center">
        <div className="text-5xl font-extrabold">Welcom to My FAN</div>
        <p className="text-lg mt-4">discover amazing thing with me</p>
          <a
            href="javascript:;"
            target="_self"
            className="bg-blue-600 text-white py-2 px-6 rounded-full mt-8 inline-block hover:bg-blue-800"
          >
            Explorer more
          </a>
      </div>
    </div>
  );
}

export default HeroBanner;
