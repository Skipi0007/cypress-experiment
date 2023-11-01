/// <reference types="cypress" />

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    cy.visit('https://zishop.vercel.app/')
    cy.title().should('eq', 'ZiShop');
  })
})
