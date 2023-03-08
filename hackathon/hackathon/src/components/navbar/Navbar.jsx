import React from "react";

const Navbar = () => {
  return (
    <section className="bg-[#e8ded5] drop-shadow-xl shadow-white ">
      <div className="flex justify-between items-center">
        <a href="/">

        <div>
          <img className="w-48 my-5 ml-5" src="/assets/images/logo.png" alt="Logo" />
        </div>
        </a>
        <div className="text-black flex justify-between items-center text-lg font-medium ">
          <div className="cursor-pointer relative group mx-10">
            <span className="text-black">Home</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full bg-black"></span>
          </div>
          <div className="cursor-pointer relative group mx-10">
            <span className="text-black">Drug Checker</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full bg-black"></span>
          </div>
          <a href="https://venerable-malasada-021691.netlify.app">
          <div className="cursor-pointer relative group mx-10">
            <span className="text-black">Speaking Bot</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full bg-black"></span>
          </div>
          </a>
        </div>
        {/* <div className="text-black text-xl font-medium uppercase">Team Annunaki</div> */}
      </div>
    </section>
  );
};

export default Navbar;
