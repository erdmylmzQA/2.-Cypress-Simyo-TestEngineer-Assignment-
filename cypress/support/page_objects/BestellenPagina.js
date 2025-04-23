/// <reference types="cypress" />

class BestellenPagina {
    
    get10GbInternetBundel() {
        return cy.get('.orderflow-selection > .sim-only-orderflow-data-selection > .orderflow-product-selection__body > .orderflow-product-list > [data-signification="10"]');
    }
   
    getKiesDitAbonnementButton() {
        return cy.get('.orderflow-selection-checkout > .btn');
    }

}

export default BestellenPagina;