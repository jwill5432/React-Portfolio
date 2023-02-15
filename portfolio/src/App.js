import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/header';
import Project from './components/Project';
import Footer from './components/footer';
import Contact from './Contact';
import AboutMe from './components/aboutme';

ReactDOM.render(<AboutMe />, document.getElementById('root'));



class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'about',
    };
  }

  handleTabClick = (tab) => {
    this.setState({
      activeTab: tab,
    });
  }

  render() {
    let activeComponent;

    switch (this.state.activeTab) {
      case 'about':
        activeComponent = <AboutMe />;
        break;
      case 'portfolio':
        activeComponent = <Project />;
        break;
      case 'contact':
        activeComponent = <Contact />;
        break;
      default:
        activeComponent = null;
    }

    return (
      <div>
        <Header onTabClick={this.handleTabClick} activeTab={this.state.activeTab} />
        {activeComponent}
        <Footer />
      </div>
    );
  }
}