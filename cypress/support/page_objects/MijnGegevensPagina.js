/// <reference types="cypress" />

class MijnGegevensPagina {

    getAanhefDhr() {
        return cy.get('[data-value="M"] > .input-radio-item__text');
    }

    getAanhefMevr() {
        return cy.get('[data-value="F"] > .input-radio-item__text');
    }

    getVoornaamPh() {
        return cy.get('.form-layout > :nth-child(2) > .form-row__field > .input-text > input');
    }

    getAchternaamPh() {
        return cy.get(':nth-child(3) > .form-row__field > .input-text > input');
    }

    getGeboortedatumPh() {
        return cy.get(':nth-child(4) > .form-row__field > .input-text > input');
    }

    getPostcodePh() {
        return cy.get('.orderflow-checkout-details__form > .form-layout > :nth-child(6) > .form-row__field > .input-text > input');
    }

    getHuisnummerPh() {
        return cy.get('[data-id="house-number"] > input');
    }

    getEmailPh() {
        return cy.get(':nth-child(12) > .form-row__field > .input-text > input');
    }

    getStadPh() {
        return cy.get('[data-id="city"] > .form-row__field > .input-text > input');
    }

    getStraatPh() {
        return cy.get('[data-id="street"] > .form-row__field > .input-text > input');
    }

    getVerderButton() {
        return cy.get('.orderflow-checkout-details__footer > .orderflow-checkout-cta > .btn');
    }



    

}

export default MijnGegevensPagina;