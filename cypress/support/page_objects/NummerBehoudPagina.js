/// <reference types="cypress" />

class NummerBehoudPagina {

    getIkWilEenNieuwNummer(){
        return cy.get('[data-value="false"] > .input-radio-item__text');
    }

    getVerderButton() {
        return cy.get('.orderflow-checkout-numberporting__footer > .orderflow-checkout-cta > .btn');
    }

}

export default NummerBehoudPagina;