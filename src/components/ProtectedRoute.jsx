import React from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends React.Component {
  state = {
    auth: false,
    loading: true,
  };

  getPosts = async () => {
    return await fetch(`http://localhost:3000/posts`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  checkStatusCode = (response) => {
    if (response.status >= 400) {
      throw new Error("not authorized");
    }
  };

  setAuth = () => this.setState({ auth: true, loading: false });

  setLoading = () => this.setState({ loading: false });

  async componentDidMount() {
    try {
      const response = await this.getPosts();
      this.checkStatusCode(response);
      this.setAuth();
    } catch (err) {
      this.setLoading();
    }
  }

  render() {
    const { loading, auth } = this.state;
    if (!loading && !auth) {
      return <Redirect to="/login" />;
    } else {
      return (
        !loading && (
          <Route
            exact={this.props.exact}
            path={this.props.path}
            component={this.props.component}
          />
        )
      );
    }
  }
}

export default ProtectedRoute;
