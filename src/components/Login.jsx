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
        <div className="field">
          <div class="columns is-centered">
            <div class="column is-half">
              <h1>Login</h1>
              {errMessage && <span>{errMessage}</span>}
              <form onSubmit={this.onFormSubmit}>
                <label className="label" htmlFor="email">
                  Email
                </label>
                <div className="control">
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
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="control">
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
                <input
                  className="button is-info"
                  type="submit"
                  value="Submit"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
