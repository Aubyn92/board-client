import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <>
        <section class="hero is-success is-fullheight">
          <div class="hero-body">
            <div class="container">
          
              <h1 class="title">Feel connected</h1>
              <h2 class="subtitle">Share your interests, discover new ones</h2>
              <div class="control">
                <input
                  class="input is-medium is-rounded"
                  type="text"
                  placeholder="Search new interest here"
                />
              </div>
              
            </div>
          </div>
        </section>
      </>
    );
  }
}
