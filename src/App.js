import './App.css';
import React from 'react';
import Buttons from './buttons/buttons';

function App() {
  const [time, setTime] = React.useState({
    minutes: 0,
    seconds: 0,
    miliseconds: 0,
  });

  let start = () => {
    setTime({
      minutes:
        (time.seconds === 59 && time.miliseconds === 99)
          ? time.minutes += 1
          : time.minutes,
      seconds:
        (time.miliseconds === 99)
          ? (time.seconds < 59)
            ? time.seconds += 1
            : time.seconds = 0
          : time.seconds,
      miliseconds: 
        (time.miliseconds < 99) 
          ? time.miliseconds += 1 : time.miliseconds = 0,
    });
  };

  let restart = () => {
    setTime({
      minutes: 0,
      seconds: 0,
      miliseconds: 0,
    });
  };

  return (
    <div className="app">
      <div className="app-container">
        <h1>Секундомер</h1>
        <div className="app-timebar">
          {time.minutes} : {time.seconds} : {time.miliseconds}
        </div>
        <Buttons start={start} restart={restart} />
      </div>
    </div>
  );
}

export default App;
