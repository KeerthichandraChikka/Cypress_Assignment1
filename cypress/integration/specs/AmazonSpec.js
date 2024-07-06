import AmazonPage from "../pages/AmazonPage";

describe('Amazon search for book', ()=>{

    it('Should hit amazon homepage', function () {
        cy.visit('/').wait(3000);
    
        AmazonPage.elements.selectDropdown().select("search-alias=stripbooks", {force: true});
        AmazonPage.elements.txtSearchField().type("Sudha Murthy books").type('{enter}');
        AmazonPage.elements.searchResults().each(($element, index, $list) =>{
            if($element.text().includes('Magic of the Lost Temple, The')){
                cy.log($element.text());
                cy.wrap($element).click();
            };
        });

    });
})