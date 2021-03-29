import React from "react";
import "./Signin.css";

const Signin = ({ onRouteChange }) => {
  return (
    <div className="signin w-100">
      <article className="center mv4 w-100 w-50-m w-25-l">
        <main className="pa4 br3 bg-near-white shadow-2 signin-card">
          <div className="measure">
            <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw5 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw5 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  className="pa2 mt2 ba br2 w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw5 lh-copy f6" htmlFor="password">
                  Password
                </label>
                <input
                  className="pa2 mt2 ba br2 w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="flex">
              <input
                className="ph3 pv2 input-reset ba b--black br2 grow pointer f6"
                type="submit"
                value="Log in"
                onClick={() => onRouteChange("home")}
              />
              <div className="lh-copy mt2 sign-up">
                <p
                  className="f5 link dim black db mv0 pointer"
                  onClick={() => onRouteChange("register")}
                >
                  Register
                </p>
              </div>
            </div>
          </div>
        </main>
      </article>
    </div>
  );
};

export default Signin;
