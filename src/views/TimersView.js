import React, {useContext} from "react";
import { AppContext } from "../components/generic/Context";
import Timer from "../components/generic/timerSequence";

//------------------------------------------
// This view is the page that will display
// the sequence of timers (i.e. the workout)
// and will track work effort
//------------------------------------------
const TimersView = () => {
  const { queue, paused, setPaused, reset } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          setPaused(!paused);
        }}
      >
        {paused ? 'Run' : 'Pause'}
      </button>
      <button onClick={reset}>Reset</button>
      <div>
        {queue.map((t, i) => (
          <Timer key={i} index={i} duration={t.duration} />
        ))}
      </div>
    </div>
  );
};

export default TimersView;
