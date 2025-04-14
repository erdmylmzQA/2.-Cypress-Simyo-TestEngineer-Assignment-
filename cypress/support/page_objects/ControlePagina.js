/// <reference types="cypress" />

class ControlePagina {
    
    getPersoonlijkeGegevens() {
        return cy.get('[data-id="3"] > .orderflow-order-summary-item__content > .orderflow-order-summary-item__content__description');
    }

}

export default ControlePagina;


