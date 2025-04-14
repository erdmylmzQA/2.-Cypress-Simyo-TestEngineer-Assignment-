/// <reference types="cypress" />

class SimkaartPagina {

    getNormaleSimkaart() {
        return cy.get('.selection-button-group > .is-active');
    }

    getVerderButton() {
        return cy.get('.orderflow-checkout-simcard__footer > .orderflow-checkout-cta > .btn');
    }
}

export default SimkaartPagina;