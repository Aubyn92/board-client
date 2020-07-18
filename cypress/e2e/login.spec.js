// describe("login form", () => {
    // it("renders email and password inputs", () => {
      // cy.visit("/login")   --passes
      // cy.get("h1");        --fails
      // cy.get(".container");    --fails
      // cy.get("#email");       --fails
      // cy.get("#email").should("be.visible");  --fails
      // cy.findByLabelText(/email/i).should("be.visible")  --fails
      // cy.document()          --passes
      // cy.url()      --passes
    // })
  // })

// describe("clicking on login", () => {
//   it("should go to the login page", () => {
//     cy.visit("/");
//     cy.findByText(/Login/).click();
//     cy.url().should("include", "/login");
//   });
//   it.only("should render email and password inputs", () => {
//     cy.findByLabelText(/email/i).should("exist");
//     cy.findByLabelText(/password/i).should("exist");
//   });
// });

// describe("when clicking on login from the homepage user", () => {
//   beforeEach(() => {
//     cy.visit("/");
//     cy.findByText(/Login/).click();
//   });

//   it("should go to the login page", () => {
//     cy.url().should("include", "/login");
//   });

//   it("should see email and password inputs", () => {
//     cy.findByLabelText(/email/i).should("exist");
//     cy.findByLabelText(/password/i).should("exist");
//   });
// });

// const LoggedOutNavbar = () => (
//   <div className="logged-out-links">
//     <Link to="/"><span role="img" aria-label="site logo">🔗</span></Link>
//     <Link to="/login" data-testid="login">Login</Link>
//     <Link to="/sign-up">Sign Up</Link>
//   </div>
// )
// beforeEach(() => {
//   cy.visit("/");
//   cy.findByTestId(/login/).click();
// });

describe("with the correct login credentials user", () => {
  before(() => {
    cy.fixture("user.json").then((user) => {
      cy.visit("/login")
      cy.findByLabelText(/email/i).type(user.email)
      cy.findByLabelText(/password/i).type(user.password)
    })
  });
      
  it("should be able to click on submit and be navigated to /posts", () => {
    cy.get("form").submit()
    cy.url().should('eql', "http://localhost:8080/posts")
  });
      
  after(() => {
    // we need to clean up after we run the tests
    window.localStorage.removeItem("token")
    window.sessionStorage.removeItem("auth")
  })
});


 