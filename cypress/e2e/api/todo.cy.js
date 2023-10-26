/// <reference types="cypress" />

describe('example to-do app', () => {

  it.only('displays two todo items by default', () => {
    cy.visit('https://zishop.vercel.app/')
    cy.title().should('eq', 'ZiShop');
    cy.request({
      method: 'GET',
      url: "https://zishop.vercel.app/",
    }).its('statusText').should('eq', 'OK')
  })
})
