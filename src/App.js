import { React, useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function App() {
  const [value, setValue] = useState();
  const [show, setShow] = useState(false);

  const getRandomDate = () => {
    const maxDate = Date.now();
    const timestamp = Math.floor(Math.random() * maxDate);
    return new Date(timestamp);
  }

  useEffect(() => {
    setValue(getRandomDate());
  }, []);

  const newTime = () => {
    setValue(getRandomDate());
    setShow(false);
  }

  const showTime = () => {
    setShow(true);
  }

  return (
    <div className="App">
      <p style={{ fontSize: "2em" }}>Current time:</p>
      <div className="clock">
        <Clock className="clock-div" secondHandWidth={0} hourHandWidth={7} minuteHandLength={90} value={value} />
      </div>
      {show &&
        <div className="time">
          <p><strong>{value.toLocaleTimeString()}</strong></p>
        </div>
      }
      <br />
      <br />
      {show
        ? <button onClick={newTime}>Nueva hora</button>
        : <button onClick={showTime}>Mostrar</button>
      }

    </div>
  );
}

export default App;
