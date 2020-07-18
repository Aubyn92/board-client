describe("clicking on login", () => {
  it("should go to the login page", () => {
    cy.visit("/");
    cy.findByText(/Login/).click();
    cy.url().should("include", "/login");
  });

  it.only("should render email and password inputs", () => {
    cy.findByLabelText(/email/i).should("exist");
    cy.findByLabelText(/password/i).should("exist");
  });
});


 