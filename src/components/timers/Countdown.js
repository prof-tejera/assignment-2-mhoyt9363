
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";
import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This timer starts from the specified
// number of seconds and counts down to 0.
//------------------------------------------

const titleStyle = {
  textAlign: "center",
  paddingBottom: 3,
}

const durationStyle = {
  textAlign: "center",
  horzontalAlign: "center",
  fontSize: 18,
}

const Countdown = ({ duration, progress })=> {

    return (
      <div>
        <div style={titleStyle}>Countdown</div>
        <ElapsedTime label="Progress: " seconds={progress} />
        <div style={durationStyle}>Duration: {convertSeconds({ seconds: duration })}</div>
      </div>
    );
  };

export default Countdown;
