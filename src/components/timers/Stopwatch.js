import { useState, useEffect } from "react";
import convertSeconds from "../../utils/helpers";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";

const Stopwatch = ({ timeCap }) => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [isDone, setDone] = useState(false);
  
//----------------------------------------------
// This timer will start at 0 and time an event.
// There is a definable time cap when it will
// stop.
//----------------------------------------------


  useEffect(() => {
    let intervalID = null;
  
    if (isActive && (isPaused === false) && (isDone === false)) {
      intervalID = setInterval(() => {
        setSeconds(seconds + 1);
        if ((seconds + 1) >= timeCap) {
            setDone(true);
        }
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isActive, isPaused, isDone, seconds, timeCap]);

  function doStart() {
    setActive(true);
    setDone(false);
  }
  function doPauseResume() {
    setPaused(!isPaused);
  }
  function doFastForward() {
    setSeconds(timeCap);
    setActive(false);
    setDone(true);
    setPaused(false);
  }

  function doReset() {
    setSeconds(0);
    setActive(false);
    setPaused(false);
    setDone(false);
  }
  
  const capStyle = {
    textAlign: "center",
    horzontalAlign: "center",
    fontSize: 10,
  }
  return (
    <div>
        <ElapsedTime label="" seconds={seconds} />
        <Buttons isActive = {isActive} isDone = {isDone} isPaused={isPaused} doStart={doStart} doPauseResume={doPauseResume} doFastForward={doFastForward} doReset={doReset} />
        <div style={capStyle}>Time cap: {convertSeconds({ seconds: timeCap })}</div>
    </div>
  );
};

export default Stopwatch;
