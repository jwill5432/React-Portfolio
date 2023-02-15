import React from 'react';
import Header from './Header';
import Footer from './Footer';

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <h1>About Me</h1>
        <p>Hello, my name is John Williams I am an up and coming coder hoping to make it in today's fast paced coding world..</p>
        <p>In my free time, I enjoy hiking, reading, and spending time with my friends and Family.</p>
        <Footer />
      </div>
    );
  }
}

export default AboutMe;