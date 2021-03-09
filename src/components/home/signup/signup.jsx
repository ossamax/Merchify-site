import React from "react";
import "./styles.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="container">
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
  );
};

export default Signup;
