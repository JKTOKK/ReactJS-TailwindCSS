import React from "react";

function CTA() {
  return (
    <section className="bg-blue-500 py-16 text-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold">Ready to get started?</h2>
        <p className="text-lg mt-4 mb-8">join us experience and the best services</p>
        <a
          href="javascript:;"
          target="_self"
          className="bg-white text-blue-500 px-6 py-2 rounded-full mt-8"
        >
          Submit
        </a>
      </div>
    </section>
  );
}

export default CTA;
