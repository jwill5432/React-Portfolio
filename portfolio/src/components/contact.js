import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <section>
        <h2>Contact Me</h2>
        <p>Have a question or want to work together? Fill out the form below to get in touch!</p>
        <form>
          <div>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    );
  }
}

export default Contact;