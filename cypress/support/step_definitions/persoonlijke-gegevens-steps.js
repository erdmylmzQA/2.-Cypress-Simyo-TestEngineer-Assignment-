/// <reference types="cypress" />

import 'cypress-mochawesome-reporter/cucumberSupport';
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import StartPagina from "../page_objects/StartPagina.js";
import BestellenPagina from "../page_objects/BestellenPagina.js";
import SimkaartPagina from "../page_objects/SimkaartPagina.js";
import NummerBehoudPagina from "../page_objects/NummerBehoudPagina.js";
import MijnGegevensPagina from "../page_objects/MijnGegevensPagina.js";
import ControlePagina from "../page_objects/ControlePagina.js"


const { generatePersoonlijkeGegevensData, parsePersoonlijkeGegevens } = require('../utility.js');
const startPagina = new StartPagina();
const bestellenPagina = new BestellenPagina();
const simkaartPagina = new SimkaartPagina();
const nummerBehoudPagina = new NummerBehoudPagina();
const mijnGegevensPagina = new MijnGegevensPagina();
const controlePagina = new ControlePagina();
const testData = generatePersoonlijkeGegevensData();
let persoonlijkeGegevensLijst = [];


Given("ben ik op de simyo homepage", () => {
  cy.visit('/');

  cy.fixture('pageData').then((data) => {
  cy.title().should('eq', data.startPaginaTitle);
  });

  startPagina.getAccButton().click();  
  
});

When("navigeer ik naar Sim Only", () => {
   startPagina.getSimOnlyButton().click();

});

When("kies ik 10GB bundel", () => {
    bestellenPagina.get10GbInternetBundel().should('be.visible').click();

    });

Then("klik ik op de Kies dit abonnement", () => {
    bestellenPagina.getKiesDitAbonnementButton().should('be.visible').click({ force: true });

    });
    
When("kies ik de normale simkaart", () => {
    simkaartPagina.getNormaleSimkaart().click();

    });

Then("ga ik verder met de volgende stap", () => {
    simkaartPagina.getVerderButton().should('be.visible').click();

    });

When("kies ik de Nee, ik wil een nieuw nummer optie", () => {
    nummerBehoudPagina.getIkWilEenNieuwNummer().click();

    });  
    
Then("ga ik naar de mijn-gegevens pagina", () => {
    nummerBehoudPagina.getVerderButton().should('be.visible').click();
   
    });

When("vul ik alle bijbehorende betaalgegevens", () => {
    if (testData.aanhef === 'Dhr.') {
        mijnGegevensPagina.getAanhefDhr().click();
      } else {
        mijnGegevensPagina.getAanhefMevr().click();
      }

      mijnGegevensPagina.getVoornaamPh().type(testData.voornaam);
      mijnGegevensPagina.getAchternaamPh().type(testData.achternaam);
      mijnGegevensPagina.getGeboortedatumPh().type(testData.geboortedatumFormatted);
      mijnGegevensPagina.getPostcodePh().type(testData.postcode);
      mijnGegevensPagina.getHuisnummerPh().type(testData.huisnummer);
      mijnGegevensPagina.getEmailPh().type(testData.email);
      mijnGegevensPagina.getStadPh().type(testData.stad);
      mijnGegevensPagina.getStraatPh().type(testData.straat)
      mijnGegevensPagina.getVerderButton().should('be.visible').click();

    });
        
Then("valideer ik de persoonlijke gegevens", () => {
    controlePagina.getPersoonlijkeGegevens().then(($el)=> {
        const parsedData = parsePersoonlijkeGegevens($el.html());
        persoonlijkeGegevensLijst.push(parsedData);
        cy.log(JSON.stringify(parsedData, null, 2));
        
        cy.wrap(parsedData.aanhef).should('eq', testData.aanhef);
        cy.wrap(parsedData.voornaam).should('eq', testData.voornaam);
        cy.wrap(parsedData.achternaam).should('eq', testData.achternaam);
        cy.wrap(parsedData.email).should('eq', testData.email);
        cy.wrap(parsedData.straat).should('eq', testData.straat);
        cy.wrap(parsedData.huisnummer).should('eq', testData.huisnummer);
        cy.wrap(parsedData.postcode).should('eq', testData.postcode);
        cy.wrap(parsedData.stad).should('eq', testData.stad);

    })

    });