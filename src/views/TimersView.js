import React, {useContext} from "react";
import { AppContext } from "../components/generic/Context";
import Timer from "../components/generic/timerSequence";
import styled from "styled-components";

//------------------------------------------
// This view is the page that will display
// the sequence of timers (i.e. the workout)
// and will track work effort
//------------------------------------------
const Container = styled.div`
  margin: 30px;
  display: inline;
  padding: 10px;
`;

const buttonStyle = {
  padding: 5,
  margin: 2,
  display: "inline",
  border: "1px solid black",
  textAlign: "center",
  fontSize: 13,
  backgroundColor: "lightgray",

}
const TimersView = () => {
  const { queue, paused, setPaused, reset } = useContext(AppContext);

  return (
    <div>
    <Container >
      <button style={buttonStyle}
        onClick={() => {
          setPaused(!paused);
        }}
      >
        {paused ? 'Run' : 'Pause'}
      </button>
      <button style={buttonStyle} onClick={reset}>Reset</button>
      </Container>
      <div>
        {queue.map((t, i) => (
          <Timer key={i} index={i} duration={t.duration} />
        ))}
      </div>
    </div>
  );
};

export default TimersView;
