import React, { Component } from "react";

export default class HomePage extends Component {
  render() {
    return (
      <section class="hero is-fullheight background">
        <div class="hero-body position is-mobile">
          <div class="container is-mobile">
            <h1 class="title is-1 is-family-code is-spaced has-text-centered has-text-centered-mobile">Feel connected</h1>
            <h2 class="subtitle is-3 is-family-sans-serif	has-text-centered has-text-centered-mobile">Share your interests, discover new ones</h2>
            <div class="control">
              <div className="columns is-mobile is-centered">
                <button class="button is-rounded is-large">
                  <a
                    href="/posts"
                    onclick="console.log('The link was clicked.'); return false"
                  >
                    Search Posts
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
