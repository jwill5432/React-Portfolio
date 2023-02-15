import React from 'react';

class MyComponent extends React.Component {
  render() {
    return (
      <div>
        { <div className="portfolio-container">
    <h1>John's Portfolio</h1>
    <div className="project-section">
      <h2>Note Taker App</h2>
      <a href="https://monumental-elf-289a8e.netlify.app/">
        <img src="./components/images/notetaker.png" alt="Note Taker App" />
      </a>
      <p>This is a note taker app that is used to store notes in express.js.</p>
    </div>
    <div className="project-section">
      <h2>Password Generator</h2>
      <a href="https://jwill5432.github.io/Password-Generator/">
        <img src="./components/images/passwordgenerator.png" alt="Password Generator" />
      </a>
      <p>This website generates passwords based on a series of prompts given to the user. The passwords are made from a multitude of criteria.</p>
    </div>
    <div className="project-section">
      <h2>Daily Planner</h2>
      <a href="https://jwill5432.github.io/Daily-Planner/">
        <img src={("./components/images/dailyplanner.png" )}alt="Daily Planner" />
      </a>
      <p>This is a daily planner. It saves daily tasks based on the hour and changes color based on what time it is.</p>
    </div>
    <div className="project-section">
      <h2>Coding Quiz</h2>
      <a href="https://jwill5432.github.io/Coding-Quiz/">
        <img src="./images" alt="Coding Quiz" />
      </a>
      <p>This is a simple code for refreshing coding basics.</p>
    </div>
    <div className="project-section">
      <h2>Weather Dashboard</h2>
      <a href="https://jwill5432.github.io/Weather-Forecast/">
        <img src="./components/images/weatherforecast.png" alt="Weather Dashboard" />
      </a>
      <p>This is a weather dashboard that gives current conditions and a five day forecast. It is made using the openweather api.</p>
    </div>
  </div>}
      </div>
    );
  }
}

export default MyComponent;