import LetsKodeHomePage from "../pages/LetsKodeHomePage.cy";

describe('HomePage Lets Kode it', function () {
    let testdata;
    before(function () {
        cy.fixture('example').then((data)=>{
            testdata = data;
        })
    })
    it('Should navigate to home page', function () {
        cy.log(testdata[0]);
        cy.visit('/');
        cy.url().should('contain', 'https://www.letskodeit.com/');
    });

    it('Should click on element practice dropdown', function () {
        LetsKodeHomePage.elements.btnPractice().click();
        LetsKodeHomePage.elements.btnElementPractice().invoke('removeAttr', 'target').click();
        cy.url().should('contain', '/practice');
    })

    it('Should validate Select dropdown', function () {
        cy.get('select[id="carselect"]').select('Benz').should('have.value','benz');
        

        cy.get('select[id="carselect"]').find('option').each(($element, index) => {
            expect($element).to.have.text(testdata[index]);
        })
    })

})