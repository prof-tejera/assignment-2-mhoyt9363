import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This component will take a label, two
// timers (seconds, seconds2), and the number
// of rounds and display the needed items.
// This component is for all timers.
//------------------------------------------

const ElapsedTime = ({ style={}, label, seconds, seconds2, rounds}) => {
  const defaultStyle = {
    padding: 1,
    backgroundColor: "lightblue",
    border: "1px solid black",
    fontSize: 18,
  }

  return (
    <div style={{...defaultStyle, ...style}}>
       {label} {rounds} {convertSeconds({seconds: seconds})} {convertSeconds({seconds: seconds2})}
    </div>
  );
};

export default ElapsedTime;
