//------------------------------------------
// This component will build the common
// buttons for all timers.
// Start - starts the timer
// Pause/Res - pauses and resumes the timer
//            (future enhancement to change text on context)
// Fast Forward - moves the timers the the end
// Reset - sets the timers back to the start
//------------------------------------------
const defaultStyle = {
  padding: 2,
  display: "inline",
  border: "1px solid black",
  width: 70,    
  height: 30,
  textAlign: "center",
  backgroundColor: "lightgreen",
  fontSize: 11,
  }

const Buttons = ({ style={}, isStarted, isDone, isPaused, doStart, doPauseResume, doFastForward, doReset}) => {

  return (
    <div>
        <button style={{...defaultStyle, ...style}} onClick={doStart}>Start</button>
        <button style={{...defaultStyle,   backgroundColor: "lightYellow"}} onClick={doPauseResume}>Pause/Res</button>
        <button style={{...defaultStyle, backgroundColor: "green"}} onClick={doFastForward}>Forward</button>        
        <button style={{...defaultStyle, backgroundColor: "lightPink"}} onClick={doReset}>Reset</button>        
    </div>
  );
};

export default Buttons;
