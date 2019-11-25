import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/patrick-stepanian/"
          >
            <img src="https://img.icons8.com/android/24/000000/linkedin.png" />
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://github.com/stepanianpat"
          >
            <img src="https://img.icons8.com/metro/26/000000/github.png" />
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
