import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";
import TimeSettings from "./Components/timeSettings";
import Timer from "./Components/timer";

function App() {
  // window.location.replace(
  //   "https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9cmc5ZDkyY3BUS0lDJmQ9WVdrOVUxRnRaVzg1VGtFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE4&redirect_url=http://localhost:3000&response_type=code"
  // );
  const [breakLength, setBreakLength] = useState<number>(5);
  const [sessionLength, setSessionLength] = useState<number>(25);
  const [timer, setTimer] = useState<number>(25);

  return (
    <>
      <div className="app">
        <h1>Pocket Pomodoro</h1>
        <div className="time-settings-container">
          <TimeSettings
            settingsName={"Change Break Time"}
            time={breakLength}
            setState={setBreakLength}
          />
          <TimeSettings
            settingsName={"Change Session Time"}
            time={sessionLength}
            setState={setSessionLength}
          />
        </div>
        <Timer timerMinute={sessionLength} />
      </div>
    </>
  );
}

export default App;
