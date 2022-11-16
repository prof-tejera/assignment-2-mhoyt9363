import { useContext, useState } from 'react';
import { AppContext } from '../components/generic/Context';
import styled from 'styled-components';

//------------------------------------------
// This component will display a page that 
// gets user input so we can 
// add a new timer to the queue. The
// options will vary depending on the timer
// type (XY, Stopwatch, Tabata or Countdown)
// they select.
//------------------------------------------

const NewTimerContainer = styled.div`
  border: 1px solid black;
  padding: 20px;
  margin: 10px;
  height: 200px;
  width: 250px;
  font-size: 1rem;
  text-align: center;
`;

const radioStyle = {
  textAlign: "left",
  display: "inline",
}

const NewTimer = () => {
  const { addItem } = useContext(AppContext);

  //keep the state of user input fields until they're done
  const [timerType, setTimerType] = useState('');
  const [work, setWork] = useState(10);
  const [rounds, setRounds] = useState(3);
  const [rest, setRest] = useState(5);
  
  let timerInputs = '';

// setup the input field options between a) work seconds b) num of rounds
// and c) rest seconds
const workInput = <div>
<label for="work">Work (sec 1-999): </label>
<input type="number" id="work" name="work"
    min="1" max="999" defaultValue={10} onChange={e => setWork(parseInt(e.target.value)) }/> 
</div>;
const roundInput = <div>
<div>
<label for="work">Work (sec 1-999): </label>
<input type="number" id="work" name="work"
    min="1" max="999" defaultValue={10} onChange={e => setWork(parseInt(e.target.value)) }/> 
</div>
<div>
<label for="rd">Rounds (1-99): </label>
<input type="number" id="rd" name="rd"
    min="1" max="99" defaultValue={3} onChange={e => setRounds(parseInt(e.target.value)) }/> 
</div>
</div>;
const restInput = <div>
<div>
<label for="work">Work (sec 1-999): </label>
<input type="number" id="work" name="work"
    min="1" max="999" defaultValue={10} onChange={e => setWork(parseInt(e.target.value)) }/> 
</div>
<div>
<label for="rest">Rest (sec 1-999): </label>
<input type="number" id="rest" name="rest"
    min="1" max="999" defaultValue={5} onChange={e => setRest(parseInt(e.target.value)) }/> 
</div>
<div>
<label for="rd">Rounds (1-99): </label>
<input type="number" id="rd" name="rd"
    min="1" max="99" defaultValue={3} onChange={e => setRounds(parseInt(e.target.value)) }/> 
</div>
</div>;

  // determine what input fields to display
  if (timerType === 'Stopwatch' || timerType === 'Countdown') {
    timerInputs = workInput
  } else if (timerType === 'XY') {
    timerInputs = roundInput
  } else if (timerType === 'Tabata') {
    timerInputs = restInput
  } else timerInputs = <div>Please start selection</div>;

  return (
    <NewTimerContainer>
     
      <fieldset >
        <legend> What type? </legend>

        <div style={radioStyle}>
          <input type="radio" id="Stopwatch" name="newtimer" value="Stopwatch"
                onChange={e => setTimerType(e.target.value) } />
          <label for="Stopwatch">Stopwatch</label>

          <input type="radio" id="Countdown" name="newtimer" value="Countdown" onChange={e => setTimerType(e.target.value) } />
          <label for="Countdown">Countdown</label>

          <input type="radio" id="XY" name="newtimer" value="XY" onChange={e => setTimerType(e.target.value) }/>
          <label for="XY">XY</label>

          <input type="radio" id="Tabata" name="newtimer" value="Tabata" onChange={e => setTimerType(e.target.value) }/>
          <label for="Tabata">Tabata</label>
        </div>
    </fieldset>

    {timerInputs}

    <button
        onClick={() => {

          let item = {}; 
          let timeDuration = 0; 

          if (timerType === 'Stopwatch' || timerType === 'Countdown') {
            item = {type: timerType, work: work, duration: work}
          } else if (timerType === 'XY') {
            timeDuration = work * rounds; 
            item = {type: timerType, work: work, rounds: rounds, duration: timeDuration}
          } else if (timerType === 'Tabata') {
            timeDuration = (work + rest) * rounds; 
            item = {type: timerType, work: work, rest: rest, rounds: rounds, duration: timeDuration}          } else timerInputs = <div>Please start selection</div>;          
          
          addItem(item);
          setTimerType('');
        }
      }
      >
        Add
      </button>

    </NewTimerContainer>
  );
};

export default NewTimer;
