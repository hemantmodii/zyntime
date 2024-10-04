import React, { useState, useEffect } from 'react';

const Notification = () => {
  // Array of messages
  const messages = [
    "Success is the sum of small efforts, repeated day in and day out.",
    "Time is what we want most, but what we use worst.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Discipline is the bridge between goals and accomplishment.",
    "The future depends on what you do today.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "The only way to achieve the impossible is to believe it is possible.",
    "Consistency is the true foundation of trust. Either keep your promises or do not make them.",
    "Dreams don’t work unless you do.",
    "It’s not about how bad you want it. It’s about how hard you’re willing to work for it.",
    "Success usually comes to those who are too busy to be looking for it.",
    "If you really look closely, most overnight successes took a long time.",
    "Time flies over us but leaves its shadow behind.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Don’t count the days, make the days count.",
    "You don’t have to be great to start, but you have to start to be great.",
    "Time is the most valuable thing a man can spend.",
    "The way to get started is to quit talking and begin doing.",
    "Lost time is never found again.",
    "Do not wait; the time will never be 'just right.' Start where you stand.",
    "The price of greatness is responsibility.",
    "Motivation gets you going, but discipline keeps you growing.",
    "Work hard in silence, let your success be your noise.",
    "Focus on being productive instead of busy.",
    "Don’t wish it were easier, wish you were better.",
    "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
    "Action is the foundational key to all success.",
    "Time is more valuable than money. You can get more money, but you cannot get more time.",
    "Persistence is the vehicle you arrive in.",
    "A year from now, you may wish you had started today.",
    "Discipline is the mother of success.",
    "It’s not about perfect. It’s about effort.",
    "Time is the wisest counselor of all.",
    "To achieve success, you need consistency and discipline.",
    "The bad news is time flies. The good news is you’re the pilot.",
    "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing.",
    "If not now, when?",
    "The secret of getting ahead is getting started.",
    "Don’t stop when you’re tired. Stop when you’re done.",
    "The pain you feel today is the strength you’ll feel tomorrow.",
    "Success is the result of preparation, hard work, and learning from failure.",
    "A goal without a plan is just a wish.",
    "Great things never come from comfort zones.",
    "The clock is ticking. Are you becoming the person you want to be?",
    "Success doesn’t just find you. You have to go out and get it.",
    "It always seems impossible until it’s done.",
    "The trouble is, you think you have time.",
    "Small daily improvements are the key to staggering long-term results.",
    "Success is nothing more than a few simple disciplines practiced every day.",
    "If you don’t make time to work on creating the life you want, you’re eventually going to be forced to spend a lot of time dealing with a life you don’t want.",
    "Opportunities don't happen, you create them.",
    "The way to gain a good reputation is to endeavor to be what you desire to appear.",
    "Time is the school in which we learn, time is the fire in which we burn.",
    "Do something today that your future self will thank you for.",
    "Work like there is someone working 24 hours a day to take it away from you.",
    "You will never always be motivated, so you must learn to be disciplined.",
    "The more disciplined you become, the easier life gets.",
    "Success isn’t always about greatness. It’s about consistency. Consistent hard work leads to success.",
    "Don’t be busy, be productive.",
    "The two most powerful warriors are patience and time.",
    "Do not wait; the time will never be 'just right.' Start where you stand, and work with whatever tools you may have at your command.",
    "Inspiration exists, but it has to find you working.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Your future is created by what you do today, not tomorrow.",
    "Don’t waste your time in anger, regrets, worries, and grudges. Life is too short to be unhappy.",
    "You must discipline yourself to accomplish what you set out to achieve.",
    "Time waits for no one.",
    "Good things come to those who work for it.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "The best way to predict your future is to create it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Productivity is never an accident. It is always the result of a commitment to excellence, intelligent planning, and focused effort.",
    "It’s not the time you put in, but what you put in the time.",
    "Time is what we want most but what we use worst.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "Hard work without talent is a shame, but talent without hard work is a tragedy.",
    "It is not enough to be busy; so are the ants. The question is: What are we busy about?",
    "There are no secrets to success. It is the result of preparation, hard work, and learning from failure.",
    "If you want to achieve greatness, stop asking for permission.",
    "The best revenge is massive success.",
    "Success is to wake up each morning and consciously decide that today will be the best day of your life.",
    "Time changes everything except something within us which is always surprised by change.",
    "Hard work betrays none.",
    "The greatest enemy of progress is not failure but comfort.",
    "Don't be upset with the results you didn’t get from the work you didn’t do.",
    "Your life is happening right now. Don’t wait for it.",
    "You can do anything, but not everything.",
    "Consistency over intensity. Daily improvements are better than sudden bursts.",
    "Don’t limit your challenges, challenge your limits.",
    "If you fail to plan, you are planning to fail.",
    "You can have results or excuses, not both.",
    "Stay focused, stay humble, and always hustle.",
    "The difference between ordinary and extraordinary is that little extra.",
    "Never give up, for that is just the place and time that the tide will turn.",
    "A dream does not become reality through magic; it takes sweat, determination, and hard work.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Success is earned, not given.",
    "Either you run the day, or the day runs you.",
    "Time is money.",
    "Work hard, stay consistent, and be patient."
  ];
  

  const [currentMessage, setCurrentMessage] = useState('');
  const [visible, setVisible] = useState(false);

  // Function to select a random message
  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
  };

  useEffect(() => {
    // Function to show and hide the notification
    const showMessage = () => {
      setCurrentMessage(getRandomMessage());
      setVisible(true);

      // Hide after 5 seconds with a fade-out animation
      setTimeout(() => {
        setVisible(false);
      }, 5000);
    };

    showMessage(); // Show immediately on mount

    // Set interval for displaying messages every 2 minutes (120000ms)
    const interval = setInterval(showMessage, 120000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div
        className={`fixed top-4 right-4 w-[17rem] bg-green-100 py-2 px-4 rounded-lg shadow-lg z-50 transition-all duration-1000 ease-in-out 
        ${visible ? 'animate-slide-down opacity-100' : 'opacity-0'} 
        ${!visible && 'animate-fade-out'}
      `}
      >
        {currentMessage}
      </div>
    </div>
  );
};

export default Notification;