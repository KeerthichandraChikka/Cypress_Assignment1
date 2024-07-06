const LetskodeItPage = {
    elements :{
        btnOpenWindow :()=> cy.get('button[id="openwindow"]'),
        btnNewWindow: () => cy.get('button[onclick="newWindow()"]'),//window-operations/
        btnNewTab: () => cy.get('a[id="opentab"]')
    
    }
}

export default LetskodeItPage;