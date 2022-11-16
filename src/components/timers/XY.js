import ElapsedTime from "../generic/ElapsedTime";
import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This timer is similar to a lap timer
// where it will track the number of laps(x)
// and the number of min:sec for each lap.
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

const XY = ({ rounds, work, progress }) => {

  const currRd = Math.trunc(progress / work) + 1; // find the current round
  const currSec = progress % work;                // find the num of sec elapsed in curr rd

  return <div>
    <div style={titleStyle}>XY Timer</div>
    <ElapsedTime label={`Rd:  ${currRd} Work: `} seconds={currSec} />
    <div style={durationStyle}>{`Rds: ${rounds} Work: ${convertSeconds({ seconds: work })}`}</div>  
    </div>
}

export default XY;
