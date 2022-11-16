import convertSeconds from "../../utils/helpers";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";

//----------------------------------------------
// This timer will start at 0 and time an event.
// There is a definable time cap when it will
// stop.
//----------------------------------------------

const titleStyle = {
  textAlign: "center",
  paddingBottom: 3,
}

const durationStyle = {
  textAlign: "center",
  horzontalAlign: "center",
  fontSize: 18,
}

const Stopwatch = ({ duration, progress }) => {

  return (
    <div>
        <div style={titleStyle}>Stopwatch</div>
        <ElapsedTime label="Progress: " seconds={progress} />
        <div style={durationStyle}>Duration: {convertSeconds({ seconds: duration })}</div>
    </div>
  );
};

export default Stopwatch;
