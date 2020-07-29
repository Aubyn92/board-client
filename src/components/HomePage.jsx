import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      // <>
      <section class="hero is-fullheight background">
        <div class="hero-body position is-mobile">
          <div class="container is-mobile">
            <h1 class="hello">Feel connected</h1>
            <h2 class="hello-little">
              Share your interests, discover new ones
            </h2>
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
      // </>
    );
  }
}
