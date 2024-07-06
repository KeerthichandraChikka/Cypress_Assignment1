const AmazonPage = {
    elements: {
        selectDropdown: () => cy.get('div[id="nav-search-dropdown-card"] select'),
        txtSearchField: () => cy.get('input[id="twotabsearchtextbox"]'),
        searchResults: () => cy.get('span[class="a-size-medium a-color-base a-text-normal"]')
    },
}

export default AmazonPage;