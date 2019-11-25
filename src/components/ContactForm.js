import React from 'react';
import Zoom from 'react-reveal/Zoom';

class ContactForm extends React.PureComponent {
  render() {
    return (
      <div className="contact-section">
        <div>
          <Zoom>
            <form
              id="contact"
              className="contact"
              action="https://formspree.io/stepanian86@gmail.com"
              method="POST"
            >
              <label htmlFor="name" id="name_label">
                Name{' '}
              </label>
              <label className="error" htmlFor="name" id="name_error" />
              <br />{' '}
              <input
                type="text"
                name="name"
                id="name"
                value=""
                className="text-input input"
                placeholder="Name"
              />
              <br />
              <label htmlFor="email" id="email_label">
                E-Mail{' '}
              </label>
              <label className="error" htmlFor="email" id="email_error" />
              <label
                className="error"
                htmlFor="email"
                id="email_invalid_error"
              />
              <br />{' '}
              <input
                type="email"
                name="email"
                id="email"
                value=""
                className="text-input input"
                placeholder="E-Mail"
              />
              <br />
              <label htmlFor="message">Message </label>
              <label className="error" htmlFor="message" id="message_error" />
              <br />{' '}
              <textarea
                name="message"
                id="message"
                rows="8"
                className="text-input input"
                placeholder="Message"
              />
              <br />
              <input
                name="submit"
                id="submit"
                value="SEND"
                type="submit"
                className="subbutton"
              />
            </form>
          </Zoom>
        </div>
      </div>
    );
  }
}

export default ContactForm;
