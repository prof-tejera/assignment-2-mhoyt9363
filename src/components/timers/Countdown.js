
import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";

//------------------------------------------
// This timer starts from the specified
// number of seconds and counts down to 0.
//------------------------------------------

const Countdown = ({ countDownStart }) => {
  const [seconds, setSeconds] = useState(countDownStart);
  const [isActive, setActive] = useState(false);
  const [isPaused, setPaused] = useState(false);
  const [isDone, setDone] = useState(false);

  useEffect(() => {
    let intervalID = null;
  
    if (isActive && (isPaused === false) && (isDone === false)) {
      intervalID = setInterval(() => {
        setSeconds(seconds - 1);
        if ((seconds - 1) <= 0) {
            setDone(true);
        }
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isActive, isPaused, isDone, seconds]);

  function doStart() {
    setActive(true);
    setDone(false);
  }
  function doPauseResume() {
    setPaused(!isPaused);
  }

  function doFastForward() {
    setSeconds(0);
    setActive(false);
    setDone(true);
    setPaused(false);
  }

  function doReset() {
    setSeconds(countDownStart);
    setActive(false);
    setPaused(false);
    setDone(false);
  }

    return (
      <div>
        <ElapsedTime label="" seconds={seconds} />
        <Buttons isActive = {isActive} isDone = {isDone} isPaused={isPaused} doStart={doStart} doPauseResume={doPauseResume} doFastForward={doFastForward} doReset={doReset} />
      </div>
    );
  };

export default Countdown;
