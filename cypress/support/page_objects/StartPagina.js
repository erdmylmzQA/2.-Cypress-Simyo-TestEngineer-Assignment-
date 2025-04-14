/// <reference types="cypress" />

class StartPagina {
  
 getSimOnlyButton() {
  return cy.get('.campaign-hero__body__footer > .button-group > [href="/sim-only/bestellen"]');
}

getAccButton() {
  return cy.get('a[data-id="1"]');
}

 
}

export default StartPagina;
