import HomePage from "../pages/HomePage.cy";

describe("Signup E2e", function () {
  before(function () {
    cy.fixture('automationExpert').as('data');
  })

describe("User signup" , function(){
   

      it("Navigate to home page", function (){
        cy.visit('/');
        cy.url().should('eq','https://automationexercise.com/');
      })

      it("Should start signup form", function (){
        cy.wait(5000);
        HomePage.elements.btnSignup_Login().click();
        HomePage.elements.txtNameSignup().type("HelloTest");
        HomePage.elements.txtEmailSignup().type(this.data.emailSignup);
        HomePage.elements.btnSignup().click();
        cy.url().should('eq',this.data.singupPage);
      })

      it("should fill users basic details", function (){
        HomePage.elements.btnMaleSignup().click();
        HomePage.elements.btnDaySignup().select('10');
        HomePage.elements.btnMonthSignup().select('10');
        HomePage.elements.btnYearSignup().select('1999');
        HomePage.elements.txtPasswordSignup().type(this.data.passwordSignup);
        HomePage.elements.txtFirstNameSignup().type(this.data.fristName);
        HomePage.elements.txtLastNameSignup().type(this.data.lastName);
        HomePage.elements.txtAddressSignup().clear().type(this.data.Address);
        HomePage.elements.btnCountrySignup().select('India');
        HomePage.elements.txtStateSignup().type(this.data.state);
        HomePage.elements.txtCitySignup().type(this.data.city);
        HomePage.elements.txtZipSignup().type(this.data.ZIP);
        HomePage.elements.txtMobileSignup().type(this.data.MobileNumber);
        HomePage.elements.btnCreateAccountSignup().click();
        HomePage.elements.txtAccountCreated().should('have.text','Account Created!');
        cy.wait(5000);
        HomePage.elements.lnkHome().click();
        cy.url().should('contain','automationexercise');
        HomePage.elements.btnLogout().click();
        cy.url().should('contain','automationexercise');
      });
    });

    describe("User trying to register again", function(){

      it("Navigate to home page", function (){
        cy.visit('/');
        cy.url().should('eq','https://automationexercise.com/');
      })

      it("Verify user cannot register with registered eamil", function (){
        cy.wait(5000);
        HomePage.clickSignupLoginButton();
        HomePage.typeName(this.data.nameSignup);
        HomePage.typeSignupEmail();
        HomePage.clickSignupButton()
        HomePage.elements.txtAlreadyRegistered().should('have.text','Email Address already exist!');
      });
    })




    describe("Verify that mandatory fields are required for sign up", function(){

      it("Navigate to home page", function (){
        cy.visit('/');
        cy.url().should('eq','https://automationexercise.com/');
      })

      it("Verify user cannot register without giving mandatory fields", function (){
        cy.wait(5000);
        HomePage.elements.btnSignup_Login().click();
        HomePage.elements.txtNameSignup().type("HelloTest");
      //  HomePage.elements.txtEmailSignup().type(this.data.emailSignup);
        HomePage.elements.btnSignup().click();
        cy.url().should('not.eql',this.data.singupPage);
      })

      // it("should fill users basic details", function (){
      //   HomePage.elements.btnMaleSignup().click();
      //   HomePage.elements.btnDaySignup().select('10');
      //   HomePage.elements.btnMonthSignup().select('10');
      //   HomePage.elements.btnYearSignup().select('1999');
      //   HomePage.elements.txtPasswordSignup().type(this.data.passwordSignup);
      //   HomePage.elements.txtFirstNameSignup().type(this.data.fristName);
      //   HomePage.elements.txtLastNameSignup().type(this.data.lastName);
      //   HomePage.elements.txtAddressSignup().clear().type(this.data.Address);
      //   HomePage.elements.btnCountrySignup().select('India');
      //   HomePage.elements.txtStateSignup().type(this.data.state);
      //   HomePage.elements.txtCitySignup().type(this.data.city);
      //   HomePage.elements.txtZipSignup().type(this.data.ZIP);
      //   HomePage.elements.txtMobileSignup().type(this.data.MobileNumber);
      //   HomePage.elements.btnCreateAccountSignup().click();
      //   HomePage.elements.txtAccountCreated().should('have.text','Account Created!');
      //   cy.wait(5000);
      //   HomePage.elements.lnkHome().click();
      //   cy.url().should('contain','automationexercise');
      //   HomePage.elements.btnLogout().click();
      //   cy.url().should('contain','automationexercise');
      // });
    })
})