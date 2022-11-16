import React, { useState } from 'react';
import { useInterval } from './customHooks';

export const AppContext = React.createContext({});

const AppProvider = ({ children }) => {
  const [queue, setQueue] = useState([]);
  const [paused, setPaused] = useState(true);
  const [time, setTime] = useState(0);

  useInterval(() => {
    if (paused) return;
    setTime(t => t + 1);
  }, 1000);

  return (
    <AppContext.Provider
      value={{
        time,
        paused,
        setPaused,
        reset: () => {setTime(0);
                      setPaused(true)
                    },
        addItem: item => setQueue(q => [...q, item]),
        
        removeItem: index => setQueue(queue.filter((q, i) => i !== index)),
        fastForward: index => {
          setTime(queue.reduce((acc, curr, i) => {
            if (i <= index) {
              return curr.duration + acc;
            } else {
              return acc;
            }
          }, 0)
          );
        },
        queue,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;