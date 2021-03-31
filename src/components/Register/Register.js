import React from "react";

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onRegister = () => {
    fetch("http://localhost:3000/register", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        this.props.loaduser(user);
        this.props.onRouteChange("home");
      });
  };

  render() {
    return (
      <div className="register w-100">
        <article className="center mv4 w-100 w-50-m w-25-l">
          <main className="pa4 br3 bg-near-white shadow-2 register-card">
            <div className="measure">
              <fieldset id="sign-up" className="ba b--transparent ph0 mh0">
                <legend className="f3 fw5 ph0 mh0">Register</legend>
                <div className="mt3">
                  <label className="db fw5 lh-copy f6" htmlFor="email-address">
                    Name
                  </label>
                  <input
                    className="pa2 mt2 ba br2 w-100"
                    type="text"
                    name="name"
                    id="name"
                    onChange={this.onNameChange}
                  />
                </div>
                <div className="mv3">
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
                  value="Register"
                  onClick={this.onRegister}
                />
              </div>
            </div>
          </main>
        </article>
      </div>
    );
  }
}

export default Register;
