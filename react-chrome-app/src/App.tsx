import React, { useState, useEffect } from "react";
import axios from "axios";
import TimeSettings from "./Components/timeSettings";
import Timer from "./Components/timer";

function App() {
  // window.location.replace(
  //   "https://api.login.yahoo.com/oauth2/request_auth?client_id=dj0yJmk9cmc5ZDkyY3BUS0lDJmQ9WVdrOVUxRnRaVzg1VGtFbWNHbzlNQT09JnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PTE4&redirect_url=http://localhost:3000&response_type=code"
  // );
  const [settings, setSettings] = useState({
    breakLength: 5,
    sessionLength: 25,
  });

  return (
    <>
      <div id="app">
        <h1>Pocket Pomodoro</h1>
        <TimeSettings
          settingsName={"Break Interval"}
          time={settings.breakLength}
        />{" "}
        <TimeSettings
          settingsName={"Session Interval"}
          time={settings.sessionLength}
        />
        <Timer timerMinute={settings.sessionLength} />
      </div>
    </>
  );
}

export default App;
