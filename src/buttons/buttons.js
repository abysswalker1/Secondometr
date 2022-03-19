import React from 'react';
import './buttons.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

let interval;

function Buttons(props) {
  const [state, setState] = React.useState(false);

  function doStop() {
    clearInterval(interval);
    setState(false);
  };

  function doStart() {
    if (!state) {
      interval = setInterval(() => {
        props.start();
      }, 10);
      setState(true);
    } else {x
      doStop();
    }
  };

  function doRestart() {
    props.restart();
    doStop();
  };

  return (
    <div className="app-buttons">
      <button className="app-buttons-btn" onClick={doRestart}>
        <i className="bi bi-arrow-clockwise"></i>
      </button>
      <button className="app-buttons-btn" onClick={doStart}>
        <i
          className="bi bi-caret-right-fill"
          style={state ? { display: 'none' } : null}></i>
        <i 
          className="bi bi-pause" 
          style={!state ? { display: 'none' } : null}></i>
      </button>
    </div>
  );
}

export default Buttons;
