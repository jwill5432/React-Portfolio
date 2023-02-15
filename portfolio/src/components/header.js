import React from 'react';

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="https://docs.google.com/document/d/1FsYuusztjA2ubSvwrI5z65gFSEw8fsnYAEH_u08lyXE/edit?usp=sharing">Resume</a></li>
            <li><a href="https://github.com/jwill5432">GitHub</a></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;