import Contact from "./Contact";

const Footer = () => {
  return (
    <div className="relative lg:w-full h-fit bg-black text-center mt-10 text-white lg:flex justify-between items-center overflow-hidden pb-20">
      <div className="absolute h-64 w-96 bg-[#66245b9f] rounded-[50%] blur-3xl top-[5%] left-[54%] z-0"></div>
      <div className="absolute h-64 w-96 bg-[#2466509f] rounded-[50%] blur-3xl top-[25%] left-[34%] z-0"></div>
      <div>
        <Contact />
      </div>
      <div className="lg:hidden h-1 w-full bg-teal-500 mb-4"></div>
      <div className="flex lg:flex-col lg:items-stretch items-center justify-center lg:gap-3 gap-28 lg:w-1/2">
        <div className="lg:mb-40 z-10">Made with ❣️ by Hemant</div>
        <div>
        <h1 className="underline underline-offset-8">Social Media</h1>
        <div className="flex justify-center items-center gap-16 mt-8">
          <div className="relative">
            <div className="absolute h-10 w-10 bg-blue-400 opacity-60 blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            Fb
          </div>
          <div className="relative">
            <div className="absolute h-10 w-10 bg-blue-800 opacity-60 blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            Li
          </div>
          <div className="relative">
            <p className="text-white">Ig</p>
            <div className="absolute h-10 w-10 bg-pink-300 opacity-90 blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
          </div>
          <div className="relative">
            <div className="absolute h-10 w-10 bg-white opacity-60 blur-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            X
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
