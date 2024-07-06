import LetskodeItPage from "../pages/LetskodeItPage.cy";

//TestFilter(["Practice"], () => {
    describe("End to End practice", function () {
        before(function () {
            // some fixutes will come here
        });

        describe("New window test", function () {

            it('Navigate to practice page', function () {
                cy.visit('/practice');
                cy.url().should('contain', 'practice');
            });

            it.skip('Click on New window button and switch to window', function () {
                cy.window().then(win => {
                    cy.stub(win, 'open').as('WindowOpen');
                });
                LetskodeItPage.elements.btnOpenWindow().click();
                cy.get('@WindowOpen').should('be.calledWith', Cypress.sinon.match.string);
            });

            it('should switch to new tab', function(){
                LetskodeItPage.elements.btnNewTab().invoke('removeAttr','target').click();
            
            })
        });
        
    });
// testfilter })