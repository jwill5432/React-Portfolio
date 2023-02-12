import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="portfolio-container">
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
        <img src="./components/images/dailyplanner.png" alt="Daily Planner" />
      </a>
      <p>This is a daily planner. It saves daily tasks based on the hour and changes color based on what time it is.</p>
    </div>
    <div className="project-section">
      <h2>Coding Quiz</h2>
      <a href="https://jwill5432.github.io/Coding-Quiz/">
        <img src="./components/images/codingquiz.png" alt="Coding Quiz" />
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
    <footer className="footer">
      <a href="https://docs.google.com/document/d/1FsYuusztjA2ubSvwrI5z65gFSEw8fsnYAEH_u08lyXE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a>
      
      <a href="https://github.com/jwill5432" target="_blank" rel="noopener noreferrer">GitHub</a>
    </footer>
  </div>
  
);
};

export default App;
