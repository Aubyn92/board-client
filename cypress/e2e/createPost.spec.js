import { postBuilder } from '../support/generate'

describe("when adding text to make a new post user", () => {
  beforeEach(() => {
    cy.fixture("token").then(({ jwt }) => {
      window.localStorage.setItem("token", jwt);
    });
  });

  it("should be able to submit the form and be redirected to the /posts page", () => {
    const post = postBuilder()
    cy.visit("/posts/create");
    cy.findByLabelText(/Title/).type(post.title);
    cy.findByLabelText(/Description/).type(post.description);
    cy.get('form').submit()
    .url()
    .should('eq', 'http://localhost:8080/posts')
  });

  after(() => {
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
});
