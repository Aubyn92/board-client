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
      <a href="">Application Center</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <a href="">Application List</a>
    </Breadcrumb.Item>
    <Breadcrumb.Item>An Application</Breadcrumb.Item>
  </Breadcrumb>,
      </div>
    )
  }
}
