/// <reference types="cypress" />

describe('example to-do app', () => {

  it.only('displays two todo items by default', () => {
    console.log('started script at', new Date().getMilliseconds())
    cy.visit('https://zishop.vercel.app/')
    cy.title().should('eq', 'ZiShop');
    cy.request({
      method: 'GET',
      url: "https://zishop.vercel.app/",
    }).its('statusText').should('eq', 'OK')
    console.log('finished script at', new Date().getMilliseconds())
  })
})
