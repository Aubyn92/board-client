import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom";

export default class ProtectedRoute extends Component {
    state = {
        auth: false,
        loading: true,
      };
    
      componentDidMount() {
        const token = localStorage.getItem("token");
        if (token === "password") {
          this.setState({
            auth: true,
            loading: false,
          });
        } else {
          this.setState({
            loading: false,
          });
        }
      }
    
      render() {
        const { loading, auth } = this.state;
        if (!loading && !auth) {
          return <Redirect to="/" />;
        } else {
          return !loading && (
            <Route
              exact={this.props.exact}
              path={this.props.path}
              component={this.props.component}
            />
          );
        }
      }
    }
