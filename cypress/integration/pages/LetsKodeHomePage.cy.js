const LetsKodeHomePage = {
    elements :{
        btnPractice: () => cy.get('li[data-action="dropdown"]'),
        btnElementPractice: () => cy.get('a[href="/practice"]')
    }
}

export default LetsKodeHomePage;