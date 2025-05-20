import React from "react";

function about() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed=".2" className="relative top-[5rem] -mb-12 bg-[#cdea68] rounded-tl-3xl rounded-tr-3xl pt-20">
      <div className='about-para mx-16 text-[4.2vw] text-zinc-800 tracking-tighter leading-none font-["Neue Montreal"]'>
        <p>
          Ochi is a strategic presentation agency for forward-thinking
          businesses that need to{" "}
          <span style={{ textDecoration: "underline" }}>
            raise funds, sell prod­ucts, ex­plain com­plex ideas,{" "}
            <span style={{ textDecoration: "none" }}>and</span> hire great
            peo­ple
          </span>{" "}
          .
        </p>
      </div>
      <div className="w-full border-t-[0.07rem] border-b-[0.07rem] border-zinc-500 flex mt-16 text-[#343729] pt-4">
        <div className="w-1/2 ">
          <span className="pl-16 pt-20">What you can expect:</span>
        </div>
        <div className="w-1/2 flex gap-6 ">
          <div className="w-1/2 flex flex-col">
            <span>
              We create tailored presentations to help you persuade your
              colleagues, clients, or investors. Whether its live or digital,
              delivered for one or a hundred people. 
            </span>
            <span className="mt-10 mb-20">
            We believe the mix of
              strategy and design (with a bit of coffee) is what makes your
              message clear, convincing, and captivating.
            </span>
          </div>
          <div className="w-1/2"></div>
        </div>
      </div>
      <div className="px-16 py-6 flex items-start">
        <div className="w-1/2">
          <h1 className="text-zinc-900 text-[3.5vw]">Our approach:</h1>
          <button className="uppercase py-3 px-4 flex bg-zinc-900 rounded-full items-center gap-6 mt-4 text-[1.1vw]">read more 
            <div className="h-2 w-2 bg-slate-200 rounded-full "></div>
          </button>
          </div>
        <div className="w-1/2 h-[70vh] bg-[#aac05d] rounded-md">
        <img className="h-full w-full bg-cover" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x939.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default about;
