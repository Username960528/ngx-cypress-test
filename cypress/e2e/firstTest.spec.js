/// <reference types="cypress" />

describe('My First Test', () => {
    it('clicking tap and navigate to new url', () => {
      cy.visit('https://example.cypress.io')

      cy.contains('type').click()

    // Should be on a new URL which
    // includes '/commands/actions'
      cy.url().should('include', '/commands/actions')

    // Get an input, type into it
      cy.get('.action-email')
      .type('fakeemail@gmail.com')
     .should('have.value','fakeemail@gmail.com')
    })
  })
