import { useContext } from 'react';
import { AppContext } from './Context';
import Stopwatch from '../timers/Stopwatch';
import Countdown from '../timers/Countdown';
import XY from '../timers/XY';
import Tabata from '../timers/Tabata';
import styled from 'styled-components';

const TimerContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  height: 125px;
  width: 250px;
  font-size: 1.5rem;
  text-align: center;
`;

const Timer = ({ index }) => {
  const { time, queue, removeItem, fastForward, paused } = useContext(AppContext);

  // Calculate total duration from timers before this one
  const timeBefore = queue.reduce((acc, curr, i) => {
    if (i < index) {
      return curr.duration + acc;
    } else {
      return acc;
    }
  }, 0);
  
  // This timer is active if the current time is between the sum of
  // all previous and the duration of this one
  const active = time >= timeBefore && time < timeBefore + queue[index].duration;

  // determine which type of timer component to use and setup parameters
  let timer='';
  switch (queue[index].type) {
    case 'Tabata':
      timer=<Tabata rounds = {queue[index].rounds} work = { queue[index].work } rest = { queue[index].rest } progress={active &&  time - timeBefore }/>
      break;
    case 'Stopwatch':
      timer=<Stopwatch duration={queue[index].duration} progress={active && time - timeBefore} />;
      break;
    case 'Countdown':
      timer=<Countdown duration={queue[index].duration} progress={active &&  (queue[index].duration + timeBefore) - time}/> ;
      break;
    case 'XY':
      timer=<XY rounds = {queue[index].rounds} work = { queue[index].work } progress={active &&  time - timeBefore }/> ;
      break;
    default:
      console.log(`Error with timer input ${queue[index].type}`);
    }

  return (
    <TimerContainer
      style={{
        backgroundColor: active ? 'lightgreen' : 'white',
        color: (active && paused) ? 'yellow' : '',
      }}
    >
      {timer}
      <button onClick={() => removeItem(index)}>Remove</button>
      <button onClick={() => fastForward(index)}>FF</button>
    </TimerContainer>
  );
};

export default Timer;