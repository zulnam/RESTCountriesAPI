/// <reference types="Cypress" />
import countriesFixture from '../fixtures/countries';

describe('Country Page tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://restcountries.com/v2/all', {
      statusCode: 200,
      body: countriesFixture,
    });
    cy.get('[data-cy="countries-container"]')
      .find('article:nth-child(2)')
      .click();
  });

  it('opens country page', () => {
    cy.url().should('include', '/country/ALB');
  });

  it('displays all country data', () => {
    cy.get('[data-cy="country-image"]')
      .should('be.visible')
      .and((image) => {
        expect(image[0].naturalWidth).to.be.greaterThan(200);
      });

    cy.contains('Albania');
    cy.contains('Shqipëria');
    cy.contains('2,837,743');
    cy.contains('Europe');
    cy.contains('Southern Europe');
    cy.contains('Tirana');
    cy.contains('.al');
    cy.contains('ALL');
    cy.contains('Albanian');

    cy.get('[data-cy="border-countries"]')
      .find('button')
      .should('have.length', 4);
    cy.contains('Montenegro');
    cy.contains('Greece');
    cy.contains('North Macedonia');
    cy.contains('Republic of Kosovo');
  });

  it('redicers to border country on click', () => {
    cy.get('[data-cy="border-countries"]').find('button:nth-child(2)').click();
    cy.url().should('not.include', '/country/ALB');
    cy.url().should('include', '/country/GRC');

    cy.contains('Greece');
  });

  it('sends user back one page when pressing Back', () => {
    cy.contains('Shqipëria');
    cy.get('[data-cy="back-button"]').click();
    cy.url().should('not.include', '/country/ALB');
    cy.url().should('eq', `${Cypress.config().baseUrl}/`);

    cy.get('[data-cy="countries-container"]')
      .find('article:nth-child(2)')
      .click();

    cy.get('[data-cy="border-countries"]').find('button:nth-child(2)').click();
    cy.contains('Ελλάδα');
    cy.get('[data-cy="back-button"]').click();
    cy.url().should('include', '/country/ALB');
  });
});
