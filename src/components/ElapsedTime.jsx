import { useState, useEffect } from 'react';

const ElapsedTime = () => {
  const [elapsedTime, setElapsedTime] = useState(0); // store time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1); // increase time by 1 second
    }, 1000);

    return () => clearInterval(interval); // cleanup on component unmount
  }, []);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes} min ${remainingSeconds} seconds`;
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-semibold'>You have just lost <span className='text-[#790f2b]'>{formatTime(elapsedTime)}</span> of your life!</p>
    </div>
  );
};

export default ElapsedTime;
