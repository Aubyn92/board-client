import React, { Component } from "react";

export default class Login extends Component {
  state = { email: "", password: "", errMessage: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/posts");
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    const { email, password, errMessage } = this.state;
    return (
      <div className="container">
        <div className="columns is-centered">
          <div className="column is-5">
            <div className="box">
              <div>
                <h1 className="title has-text-centered">Login</h1>
              </div>
              {errMessage && <span>{errMessage}</span>}
              <form onSubmit={this.onFormSubmit}>
                <div className="field">
                  <label className="label" htmlFor="email">
                    Email
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      data-testid="email"
                      onChange={this.onInputChange}
                    />
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
                <div className="field">
                  <label className="label" htmlFor="password">
                    Password
                  </label>
                  <div className="control has-icons-left">
                    <input
                      className="input"
                      type="password"
                      name="password"
                      id="password"
                      value={password}
                      data-testid="password"
                      onChange={this.onInputChange}
                    />
                  </div>
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
                <div className="buttons"></div>
                <input className="button is-link" type="submit" value="Login" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
