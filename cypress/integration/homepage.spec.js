/// <reference types="Cypress" />
import countriesFixture from '../fixtures/countries';

describe('Homepage Tests', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept('GET', 'https://restcountries.com/v2/all', {
      statusCode: 200,
      body: countriesFixture,
    });
  });

  it('loads on landing page', () => {
    cy.contains('Where in the world?');
  });

  it('renders countries list on page load', () => {
    cy.get("[data-cy='countries-container']")
      .find('article')
      .should('have.length', 16);
  });

  it('filters data based on search input', () => {
    cy.get('[data-cy="search-input"]').type('al');
    cy.get('[data-cy="countries-container"]')
      .find('article')
      .should('have.length', 3);
    cy.contains('Albania');
    cy.contains('Algeria');
    cy.contains('Australia');
    cy.get('[data-cy="search-input"]').clear();
    cy.get('[data-cy="countries-container"]')
      .find('article')
      .should('have.length', 16);
  });

  it('filters data based on region selection', () => {
    cy.get('[data-cy="dropdown-button"]').click();
    cy.get('[data-cy="dropdown-content"]').find('a:nth-child(4)').click();

    cy.get("[data-cy='countries-container']")
      .find('article')
      .should('have.length', 7);
  });

  it('clears search input on region filter change', () => {
    cy.get('[data-cy="search-input"]').type('al');
    cy.get('[data-cy="dropdown-button"]').click();
    cy.get('[data-cy="dropdown-content"]').find('a:nth-child(2)').click();

    cy.get('[data-cy="search-input"]').should('not.have.value');
  });

  it('filters data based on search input and existing filters', () => {
    cy.get('[data-cy="dropdown-button"]').click();
    cy.get('[data-cy="dropdown-content"]').find('a:nth-child(5)').click();
    cy.get('[data-cy="search-input"]').type('a');

    cy.get('[data-cy="countries-container"]')
      .find('article')
      .should('have.length', 2);
    cy.contains('American Samoa');
    cy.contains('Australia');
  });
});
