// describe("clicking on login", () => {
//     it("should go to the login page", () => {
//       cy.visit("/");
//       cy.findByText(/Login/).click();
//       cy.url().should("include", "/login");
//     });
//   it.only("should render email and password inputs", () => {
//     cy.findByLabelText(/email/i).should("exist");
//     cy.findByLabelText(/password/i).should("exist");
//   });
// });
describe("when clicking on login from the homepage user", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.findByText(/Login/).click();
    });
 
    it("should go to the login page", () => {
      cy.url().should("include", "/login");
    });
 
    it("should see email and password inputs", () => {
      cy.findByLabelText(/email/i).should("exist");
      cy.findByLabelText(/password/i).should("exist");
    });
  });



 