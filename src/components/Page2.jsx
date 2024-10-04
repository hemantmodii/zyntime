import React from "react";

const Page2 = () => {
  return (
    <div className="lg:flex justify-evenly items-center my-8 lg:mx-0 mx-[20%]">
      {/* card 1 */}
      <div className="h-[22rem] lg:w-1/4 bg-black text-white rounded-2xl p-4 shadow-lg shadow-gray-500 flex flex-col justify-center items-center text-center relative overflow-hidden hover:animate-shake lg:mb-0 mb-8">
        <h1 className="text-2xl font-semibold mb-4">Track Your Year, Month, and Day</h1>
        <p className="">
        &quot;Get a visual representation of your progress for the year, month, and day. Click on any progress bar to schedule and manage your tasks right below it, ensuring you&apos;re on track for your goals.&quot;

        </p>
        <div className="absolute h-40 w-40 bg-[#7c297d] opacity-45  -top-4 left-2/3 rounded-l-[3rem] rotate-12"></div>
        <div className="absolute h-32 w-32 bg-[#7c297d] opacity-45  bottom-4 -left-12 rounded-[3rem] -rotate-12"></div>
      </div>
      {/* card 2 */}
      <div className="h-[22rem] lg:w-1/4 text-white bg-black rounded-2xl p-4 shadow-lg shadow-gray-500 flex flex-col justify-center items-center text-center relative overflow-hidden hover:animate-shake  lg:mb-0 mb-8">
        <h1 className="text-2xl font-semibold mb-4">Stay on Task</h1>
        <p className="">
          &quot;Easily manage your daily tasks by clicking on the respective progress bar. Organize, set priorities, and ensure you&apos;re always ahead of your schedule.&quot;
        </p>
        <div className="absolute h-44 w-44 bg-[#6de1fb] opacity-45  top-10 -right-14 rounded-[2.5rem] rotate-[30deg]"></div>
        <div className="absolute h-44 w-44 bg-[#6dc7fb] opacity-45  -top-4 -left-36 rounded-r-[3rem] rotate-12"></div>
      </div>
      {/* card 3 */}
      <div className="h-[22rem] lg:w-1/4 bg-black text-white rounded-2xl p-4 shadow-lg shadow-gray-500 flex flex-col justify-center items-center text-center relative overflow-hidden transition-transform hover:animate-shake">
        <h1 className="text-2xl font-semibold mb-4">Get Motivated</h1>
        <p className="">
        &quot;Receive motivational quotes every 2 minutes to keep you inspired. Whether you&apos;re ahead or behind, stay on top of your game with constant encouragement.&quot;
        </p>
        <div className="absolute h-40 w-40 bg-[#6dfbdf] opacity-45  -bottom-4 left-2/3 rounded-[3rem] rotate-12"></div>
        <div className="absolute h-32 w-32 bg-[#6dfbdf] opacity-45  top-[3.25rem] -left-28 rounded-tr-[2.5rem] rotate-[30deg]"></div>
      </div>
    </div>
  );
};

export default Page2;
