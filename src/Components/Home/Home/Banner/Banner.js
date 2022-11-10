import React from "react";

const Banner = () => {
  
  return (
    <div className="hero min-h-screen" style={{
      backgroundAttachment: " fixed",
       backgroundImage: `url("https://i.ibb.co/Rz1dDJv/spacejoy-um-AXne-H4-Gh-A-unsplash.jpg")` }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">Home is the starting place of love, hope and dreams</h1>
      <p className="mb-5 text-2xl">Find your home with us!</p>
      <button className="btn btn-outline btn-success text-xl font-bold px-10">EXPLORE</button>
    </div>
  </div>
</div>
        );
      };

export default Banner;
