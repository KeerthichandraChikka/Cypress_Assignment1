const HomePage = {
    elements: {
        lnkHome:() => cy.get('li a[href="/"]'),
        listCategory :() => cy.get('div[id="accordian"]'),
        btnSignup_Login: () => cy.get('a[href="/login"]'),
        btnLoginEmail: () => cy.get('input[data-qa="login-email"]'),
        btnLoginPassword: () => cy.get('input[data-qa="login-password"]'),
        btnLoginSignin: () => cy.get('input[data-qa="login-button"]'),

        txtNameSignup: () => cy.get('input[data-qa="signup-name"]'),
        txtEmailSignup: () => cy.get('input[data-qa="signup-email"]'),
        btnSignup: () => cy.get('button[data-qa="signup-button"]'),

        btnMaleSignup: () => cy.get('input[id="id_gender1"]'),
        btnFemaleSignup: () => cy.get('input[id="id_gender2"]'),
        txtPasswordSignup: () => cy.get('input[id="password"]'),

        btnDaySignup: () => cy.get('select[id="days"]'),
        btnMonthSignup: () => cy.get('select[id="months"]'),//months
        btnYearSignup: () => cy.get('select[id="years"]'),

        txtFirstNameSignup: () => cy.get('input[id="first_name"]'),
        txtLastNameSignup: () => cy.get('input[id="last_name"]'),
        txtAddressSignup: () => cy.get('input[id="address1"]'),

        btnCountrySignup: () => cy.get('select[id="country"]'),
        txtStateSignup: () => cy.get('input[id="state"]'),
        txtCitySignup: () => cy.get('input[id="city"]'),
        txtZipSignup: () => cy.get('input[id="zipcode"]'),
        txtMobileSignup: () => cy.get('input[id="mobile_number"]'),
        btnCreateAccountSignup: () => cy.get('button[data-qa="create-account"]'),
        btnLogout: () => cy.get('a[href="/logout"]'),

        txtAccountCreated: () => cy.get('h2[data-qa="account-created"]'),
        txtAlreadyRegistered: () => cy.get('form[action="/signup"] p')
    },

    clickSignupLoginButton(){
        this.elements.btnSignup_Login().click();
    },

    typeName(name){
        this.elements.txtNameSignup().type(name);
    },

    typeSignupEmail(emailSignup){
    this.elements.txtEmailSignup().type(emailSignup);
    },
    
    clickSignupButton(){
    this.elements.btnSignup().click();
    }
}

export default HomePage;