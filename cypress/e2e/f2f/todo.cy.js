/// <reference types="cypress" />

describe('example to-do app', () => {

  it('displays two todo items by default', () => {
    console.log('started script at', new Date().getMilliseconds())
    cy.visit('http://localhost:3000')
    cy.title().should('eq', 'ZiShop');
    console.log('finished script at', new Date().getMilliseconds())
  })
})
