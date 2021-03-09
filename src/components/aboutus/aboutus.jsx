import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import aboutusimg from "../../images/aboutus.jpg";
import Video from "../../images/video.mp4";
import securepayment from "../../images/securepayments.svg";
import worldwideshipping from "../../images/worldwideshipping.svg";
import friendlysupport from "../../images/friendly_support.svg";


const Aboutus = () => {
  return (
    <>
      <div className="aboutus">
        <div className="container">
          <div className="aboutus_hero">
            <h1>About Us</h1>
          </div>

          <div className="aboutus_content">
            <div>
              <h1>Tell your story to people all around the world</h1>
              <p>
                And that leads, of course, to a strong suspicion that everybody
                else can do it if they want to. and then, a journey into
                tomorrow, a journey to another planet, a manned mission to mars.
                armstrong's words. as far as i know, an alien spacecraft did not
                crash in roswell, new mexico, in 1947. the fraction of the above
                that actually go on to develop life at some point. if they be
                inhabited, what a scope for misery and folly; if they be na
                inhabited, what a waste of space. in spite of the opinions of
                certain narrow-minded people who would shut up the human race
                upon this globe, we shall one day travel to the moon, the
                planets, and the stars with the same facility, rapidity and
                certainty as we now make the ocean voyage from liverpool to new
                york. is it not demonstrated that a true flying machine,
                self-raising, self-sustaining, self-propelling, is physically
                impossible? let othello subject desdemona to a lie-detector
                test; his jealousy will still blind him to the evidence. new
                stars offer to the mind a phenomenon more surprising, and less
                explicable.
              </p>
              <button>
                <Link to="/">Visit Our Store</Link>
              </button>
            </div>
            <img src={aboutusimg} alt="" />
          </div>

          <div className="services_container">
            <div>
              <img src={worldwideshipping} alt="" />
              <h1>Worldwide Shipping</h1>
              <p>
                All our orders ship from various warehouses to ensure fast
                shipping times all over the world.
              </p>
            </div>
            <div>
              <img src={securepayment} alt="" />
              <h1>Secure Payments</h1>
              <p>
                pay with full confidence thanks to our secure and encrypted
                payment methods
              </p>
            </div>
            <div>
              <img src={friendlysupport} alt="" />
              <h1>Friendly Support</h1>
              <p>
                Got a question? Contact our friendly support staff and they'll
                get back to you as soon as possible
              </p>
            </div>
          </div>

          <div className="email_container">
            <video className="video" autoPlay loop muted>
              <source src={Video} type="video/mp4" />
            </video>
            <div className="email">
              <h1>Hey there. Don't miss out on our next merch drop!</h1>
              <form action="">
                <input
                  type="text"
                  name="email"
                  placeholder="Subscribe to our newsletter"
                  required
                />
                <br />
                <button type="submit">Sign Me Up</button>
              </form>
            </div>
          </div>
          </div>
        </div>

    </>
  );
};

export default Aboutus;
