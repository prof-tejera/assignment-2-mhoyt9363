import React from "react";
import styled from "styled-components";
import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  column-count: 2;
  align-items: top;
  width: 800px;
  color: blue;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  height: 125px;
  font-size: 1.5rem;
  text-align: center;
`;

const TimerTitle = styled.div`
text-align: center;
padding-bottom: 3px`;

//-------------------------------------------
// Hard coded values (in seconds when it's a 
// time value) that simulates user entry
//-------------------------------------------
const stopWatchCap = 60;
const countDownStart = 33;
const xyXValue = 3;
const xyYValue = 5;
const tabataWorkValue = 10;
const tabataRestValue = 5;
const tabataRoundsValue = 3;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch timeCap={stopWatchCap}/> },
    { title: "Countdown", C: <Countdown countDownStart={countDownStart}/> },
    { title: "XY", C: <XY xValue={xyXValue} yValue={xyYValue}/> },
    { title: "Tabata", C: <Tabata tabataRounds={tabataRoundsValue} tabataWork={tabataWorkValue} tabataRest={tabataRestValue}/> },
  ];

  return (
    <div >
        <Timers>
          {timers.map((timer) => (
            <Timer key={`timer-${timer.title}`}>
              <TimerTitle>{timer.title}</TimerTitle>
              {timer.C}
            </Timer>
          ))}
        </Timers>
    </div>
  );
};

export default TimersView;
