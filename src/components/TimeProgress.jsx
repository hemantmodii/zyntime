import { useEffect, useState } from "react";
import YearTracker from "./YearTracker";
import MonthTracker from "./MonthTracker";
import DayTracker from "./DayTracker";

const TimeProgress = () => {
  const [yearProgress, setYearProgress] = useState(0);
  const [monthProgress, setMonthProgress] = useState(0);
  const [hourProgress, setHourProgress] = useState(0);
  const [minuteProgress, setMinuteProgress] = useState(0);
  const [secondProgress, setSecondProgress] = useState(0);
  const [lifeProgress, setLifeProgress] = useState(0); // New state for life progress

  const [yearTrackerState, setYearTrackerState] = useState(false);
  const [monthTrackerState, setMonthTrackerState] = useState(false);
  const [dayTrackerState, setDayTrackerState] = useState(false);

  const [dob, setDob] = useState(""); // State for Date of Birth input

  // Helper function to get the correct day suffix
  const getDaySuffix = (day) => {
    if (day === 1 || day === 21 || day === 31) return "st";
    if (day === 2 || day === 22) return "nd";
    if (day === 3 || day === 23) return "rd";
    return "th";
  };

  const getMonthName = (month) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  };

  // Function to calculate age and life progress
  const calculateLifeProgress = (dob) => {
    const now = new Date();
    const birthDate = new Date(dob);
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && now.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    // Calculate life progress assuming lifespan is 100 years
    const lifeProgress = age / 100;
    setLifeProgress(lifeProgress);
  };

  useEffect(() => {
    const updateProgress = () => {
      const now = new Date();
      const yearProgress = (now.getDate() + now.getMonth() * 30) / 365; // Simplified for demonstration
      const monthProgress = now.getDate() / 30; // Assuming 30 days in a month
      const hourProgress = now.getHours() / 24; // 24 hours
      const minuteProgress = now.getMinutes() / 60; // 60 minutes
      const secondProgress = now.getSeconds() / 60; // 60 seconds

      setYearProgress(yearProgress);
      setMonthProgress(monthProgress);
      setHourProgress(hourProgress);
      setMinuteProgress(minuteProgress);
      setSecondProgress(secondProgress);
    };

    const interval = setInterval(updateProgress, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-[20%] my-10 flex flex-col gap-10">
      <div>
        <div
          className="rounded-lg relative"
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "20px",
          }}
        >
          <div
            className="rounded-lg shadow-md"
            id="yearTimeline"
            style={{
              width: `${yearProgress * 100}%`,
              backgroundColor: "#23022E",
              height: "20px",
              marginBottom: "5px",
            }}
          ></div>
          <div
            className="text-right cursor-pointer text-lg font-semibold absolute right-2 -top-1"
            onClick={() => setYearTrackerState(!yearTrackerState)}
          >
            {getMonthName(new Date().getMonth()).toUpperCase()}
          </div>
        </div>

        {yearTrackerState && <YearTracker />}
      </div>

      <div>
        <div
          className="rounded-lg mb-8 relative"
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "20px",
          }}
         >
          <div
            className="rounded-lg shadow-md"
            id="monthTimeline"
            style={{
              width: `${monthProgress * 100}%`,
              backgroundColor: "#4059AD",
              height: "20px",
              marginBottom: "5px",
            }}
          ></div>
          <div
            className="text-right cursor-pointer text-lg font-semibold absolute right-2 -top-1"
            onClick={() => setMonthTrackerState(!monthTrackerState)}
          >
            {new Date().getDate()}
            {getDaySuffix(new Date().getDate())}
          </div>
        </div>

        {monthTrackerState && <MonthTracker />}
      </div>

      <div>
        <div
          className="rounded-lg relative"
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "20px",
          }}
        >
          <div
            className="rounded-lg shadow-md"
            id="dateTimeline"
            style={{
              width: `${hourProgress * 100}%`,
              backgroundColor: "#6B9AC4",
              height: "20px",
              marginBottom: "5px",
            }}
          ></div>
          <div
            className="text-right cursor-pointer text-lg font-semibold absolute right-2 -top-1"
            onClick={() => setDayTrackerState(!dayTrackerState)}
          >
            {Math.round(hourProgress * 24)} hr
            {Math.round(hourProgress * 24) !== 1 && <span>s</span>}
          </div>
        </div>

        {dayTrackerState && <DayTracker />}
      </div>

      <div>
        <div
          className="rounded-lg relative"
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "20px",
          }}
        >
          <div
            className="rounded-lg shadow-md"
            id="hourTimeline"
            style={{
              width: `${minuteProgress * 100}%`,
              backgroundColor: "#17B890",
              height: "20px",
              marginBottom: "5px",
            }}
          ></div>
          <div className="text-right text-lg font-semibold absolute right-2 -top-1">
            {Math.round(minuteProgress * 60)} m
          </div>
        </div>
      </div>

      <div>
        <div
          className="rounded-lg relative"
          style={{
            width: "100%",
            backgroundColor: "white",
            height: "20px",
          }}
        >
          <div
            className="rounded-lg shadow-md"
            id="minuteTimeline"
            style={{
              width: `${secondProgress * 100}%`,
              backgroundColor: "#B3F2DD",
              height: "20px",
            }}
          ></div>
          <div className="text-right text-lg font-semibold absolute right-2 -top-1">
            {Math.round(secondProgress * 60)} s
          </div>
        </div>
      </div>

      {/* New section for Life Progress */}
      {dob && (
        <div className="relative">
          <div
            className="rounded-lg"
            style={{
              width: "100%",
              backgroundColor: "white",
              height: "20px",
            }}
          >
            <div
              className="rounded-lg shadow-md"
              id="lifeTimeline"
              style={{
                width: `${lifeProgress * 100}%`,
                backgroundColor: "#FF6B6B",
                height: "20px",
                marginBottom: "5px",
              }}
            ></div>
          </div>
          <div className="text-right absolute -top-0 right-2 font-semibold">
            Life Progress: {Math.round(lifeProgress * 100)}%
          </div>
        </div>
      )}
      <div>
        <label htmlFor="dob">Enter your Date of Birth:</label>
        <input
          type="date"
          id="dob"
          max={new Date().toISOString().split("T")[0]}
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
            calculateLifeProgress(e.target.value); // Recalculate life progress when DOB is entered
          }}
          className="block my-2 p-2 border rounded-md"
        />
      </div>
    </div>
  );
};

export default TimeProgress;
