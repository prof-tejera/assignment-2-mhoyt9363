import { useState, useEffect } from "react";
import Buttons from "../generic/Buttons";
import ElapsedTime from "../generic/ElapsedTime";
import convertSeconds from "../../utils/helpers";

//------------------------------------------
// This tabata timer will time work effort
// then rest time for a specified number
// of rounds.
//------------------------------------------

const Tabata = ({tabataRounds, tabataWork, tabataRest}) => {

    const [rounds,setRounds] = useState(1);
    const [work,setWork] = useState(0);
    const [rest,setRest] = useState(0);
    const [isActive, setActive] = useState(false);
    const [isPaused, setPaused] = useState(false);
    const [isDone, setDone] = useState(false);
    
    useEffect(() => {

    let intervalID = null;
    
    if (isActive && (isPaused === false) && (isDone === false)) {
        intervalID = setInterval(() => {
        if (work < tabataWork)
            setWork(work + 1)
        else if (rest < tabataRest)
            setRest(rest + 1)
        else if (rounds < tabataRounds) {
            setRounds(rounds + 1)
            setWork(0);
            setRest(0);
        }
        else {
            setDone(true);
        }
            

        }, 1000);
    } else {
        clearInterval(intervalID);
    }
    return () => {
        clearInterval(intervalID);
    };
    }, [isActive, isPaused, isDone, work, rest, rounds, tabataWork, tabataRest, tabataRounds]);

    function doStart() {
    setActive(true);
    setDone(false);
    }
    function doPauseResume() {
    setPaused(!isPaused);
    }

    function doFastForward() {
    setWork(tabataWork);
    setRest(tabataRest);
    setRounds(tabataRounds)
    setActive(false);
    setDone(true);
    setPaused(false);
    }

    function doReset() {
    setWork(0);
    setRest(0);
    setRounds(1)
    setActive(false);
    setPaused(false);
    setDone(false);
    }

    let tabataText = 'Rounds - ' + tabataRounds + ' Work - ' + convertSeconds({seconds: tabataWork}) + 'Rest - ' + convertSeconds({seconds: tabataRest});

    return <div>
    <ElapsedTime label={tabataText} />
    <ElapsedTime rounds={rounds} seconds={work} seconds2={rest} />
    <Buttons isActive = {isActive} isDone = {isDone} isPaused={isPaused} doStart={doStart} doPauseResume={doPauseResume} doFastForward={doFastForward} doReset={doReset} />
    </div>
}
    
export default Tabata;
