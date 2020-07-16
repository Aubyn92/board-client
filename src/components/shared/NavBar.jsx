import React, { Component } from 'react'
import { Breadcrumb } from 'antd';
import 'antd/dist/antd.css';

export default class NavBar extends Component {
  render() {
    return (
      <div>
        <Breadcrumb>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Posts</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <a href="">Log In</a>
        </Breadcrumb.Item>
        <Breadcrumb.Item>Sign Up</Breadcrumb.Item>
        </Breadcrumb>,
      </div>
    )
  }
}
