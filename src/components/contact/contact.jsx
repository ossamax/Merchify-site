import React from "react";
import "./styles.css";

const Contact = () => {
  return (
    <>
      <div className="contact_section">
        <div className="container">
          <div className="aboutus_hero">
            <h1>Contact Us</h1>
          </div>
          <div className="form_content">
            <div className="info_details">
              <div>
                <h1>Contact</h1>
                <p>
                  3880 Braxton Street Chicago, <br />
                  il 60606 United States
                </p>
                <p>company@domain.com</p>
                <p>815-515-2603</p>
              </div>
              <div>
                <h1>FAQ</h1>
                <p>
                  Did you already take a look at our <span>FAQ ? </span>
                  Chances are you'll find your answer there.
                </p>
              </div>
            </div>
            <form action="">
              <label htmlFor="name">Name</label>
              <br />
              <input
                type="text"
                email="name"
                placeholder="Enter Your full Name"
                required
              />
              <br />
              <label htmlFor="email">Email</label>
              <br />
              <input
                type="email"
                name="email"
                placeholder="Enter Your Email"
                required
              />
              <br />
              <label htmlFor="message">Message</label>
              <br />
              <textarea
                type="text"
                placeholder="How Can We Help You !"
                required
              />
              <br />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
