import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";
import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This timer is similar to a lap timer
// where it will track the number of laps(x)
// and the number of min:sec for each lap.
//------------------------------------------

const XY = ({xValue, yValue}) => {

    const [seconds, setSeconds] = useState(0);
    const [x,setXValue] = useState(1);
    const [isActive, setActive] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const [isDone, setDone] = useState(false);
  
    useEffect(() => {

    let intervalID = null;
  
    if (isActive && (isPaused === false) && (isDone === false)) {
      intervalID = setInterval(() => {
        setSeconds(seconds + 1);
        if ((seconds) >= yValue) {
            setXValue(x + 1)
            if (x >= xValue) {
                setDone(true);
                setSeconds(yValue);
                setXValue(xValue);
            } else {
            setSeconds(0);
            }
        }
      }, 1000);
    } else {
      clearInterval(intervalID);
    }
    return () => {
      clearInterval(intervalID);
    };
  }, [isActive, isPaused, isDone, seconds, x, xValue, yValue]);

  function doStart() {
    setActive(true);
    setDone(false);
  }
  function doPauseResume() {
    setPaused(!isPaused);
  }

  function doFastForward() {
    setSeconds(yValue);
    setXValue(xValue);
    setActive(false);
    setDone(true);
    setPaused(false);
  }

  function doReset() {
    setSeconds(0);
    setXValue(1);
    setActive(false);
    setPaused(false);
    setDone(false);
  }

  let xyText = 'X - ' + xValue + ' Y - ' + convertSeconds({seconds: yValue});

  return <div>
    <ElapsedTime label={xyText} />
    <ElapsedTime rounds={x} seconds={seconds} />
    <Buttons isActive = {isActive} isDone = {isDone} isPaused={isPaused} doStart={doStart} doPauseResume={doPauseResume} doFastForward={doFastForward} doReset={doReset} />
  </div>
}

export default XY;
