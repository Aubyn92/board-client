import { userBuilder } from "../support/generate";

describe("when clicking on sign-up from the homepage user", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.findByTestId("sign-up").click();
    });

    it("should go to the sign-up page", () => {
        cy.url().should("include", "/sign-up");
      }); 
      
    it("should be able to type into email and password inputs", () => {
        const { email, password } = userBuilder()
        cy.findByLabelText(/email/i).type(email).should("contain.value", email)
        cy.findByLabelText(/password/i).type(password).should("contain.value", password)
    })

    it("should see email and password inputs", () => {
        cy.findByLabelText(/email/i).should("exist");
        cy.findByLabelText(/password/i).should("exist");
      });
  });

  describe("with the correct sign-up credentials user", () => {
    before(() => {
       cy.fixture("user.json").then((user) => {
       cy.visit("/login")
       cy.findByLabelText(/email/i).type(user.email)
       cy.findByLabelText(/password/i).type(user.password)    
    })
});

it("should be able to click on submit and be navigated to /posts", () => {
    cy.get("form").submit()
    cy.url().should('eq', "http://localhost:8080/posts")
  });


  after(() => {
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
});