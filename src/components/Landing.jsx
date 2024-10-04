import TimeProgress from "./TimeProgress";
import logo from "../assets/zyntimelogo1.png";

const Landing = () => {
  return (
    <div>
      <div className="absolute h-64 w-96 bg-[#ff7feaa1] rounded-[50%] blur-3xl top-[5%] left-[4%] z-0 overflow-hidden"></div>
      <div className="absolute h-64 w-96 bg-[#23022e6d] rounded-[50%] blur-3xl top-[30%] left-[30%] z-0"></div>
      <div className="absolute h-64 w-96 bg-[#2098c855] rounded-[50%] blur-3xl top-[40%] left-[40%] z-0"></div>
      <div className="absolute h-64 w-96 bg-[#21a67955] rounded-[50%] blur-2xl top-[10%] lg:left-[70%] left-[35%] z-0"></div>
      <div className='relative z-10'>
      <img className='mx-auto h-48 my-[-2rem]' src={logo} alt="" />
      <h2 className='text-center'>Don&apos;t be fooled by analog clocks, time doesn&apos;t move in circles.</h2>
      <TimeProgress/>
    </div>
    </div>
  )
}

export default Landing