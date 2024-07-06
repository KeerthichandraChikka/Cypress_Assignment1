import CypressAllEvents_Letskodeit from "../pages/LetskodeItPage.cy";


describe('End to End for new Window', function (){
    it('Should navigate to /window-operations/ page', function(){
        cy.visit('/window-operations/');
        cy.url().should('contain','window-operations/');
    })

    it('Should click on button and switch new window', function(){
        cy.window().then(win =>{
            cy.stub(win, 'open'). as('NewWindow');
        });
        CypressAllEvents_Letskodeit.elements.btnNewWindow().click();
        cy.get('@NewWindow').should('be.calledWith', Cypress.sinon.match.string);
    })
})