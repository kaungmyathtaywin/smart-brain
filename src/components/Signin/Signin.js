import React from "react";
import "./Signin.css";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: "",
      signInPassword: "",
    };
  }

  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onLogIn = () => {
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          console.log(data.id);
          this.props.loaduser(data);
          this.props.onRouteChange("home");
        }
      })
      .catch((error) => console.log(error));
  };

  render() {
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
                    onChange={this.onEmailChange}
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
                    onChange={this.onPasswordChange}
                  />
                </div>
              </fieldset>
              <div className="flex">
                <input
                  className="ph3 pv2 input-reset ba b--black br2 grow pointer f6"
                  type="submit"
                  value="Log in"
                  onClick={this.onLogIn}
                />
                <div className="lh-copy mt2 sign-up">
                  <p
                    className="f5 link dim black db mv0 pointer"
                    onClick={() => this.props.onRouteChange("register")}
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
  }
}

export default Signin;
