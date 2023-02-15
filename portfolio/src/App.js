import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Project from './components/portfolio';
import Footer from './components/footer';
import AboutMe from './components/aboutme';

ReactDOM.render(<AboutMe />, document.getElementById('root'));



class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Project />
        <AboutMe />
        <Footer />
      </div>
    );
  }
}