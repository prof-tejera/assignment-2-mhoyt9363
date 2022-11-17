import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This component will take a label, two
// timers (seconds, seconds2), and the number
// of rounds and display the needed items.
// This component is for all timers.
//------------------------------------------
const defaultStyle = {
  padding: 1,
  backgroundColor: "lightblue",
  border: "1px solid black",
  fontSize: 18,
}



const ElapsedTime = ({ style={}, label, seconds, label2, seconds2, label3, rounds}) => {

  return (
    <div style={{...defaultStyle, ...style}}>
       {label} {rounds} {label2} {convertSeconds({seconds: seconds})} {label3} {convertSeconds({seconds: seconds2})}
    </div>
  );
};

export default ElapsedTime;
