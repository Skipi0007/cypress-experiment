/// <reference types="cypress" />

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.visit('http://localhost:3000')
    cy.title().should('eq', 'ZiShop');
  })
})
