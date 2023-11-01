/// <reference types="cypress" />

describe('e2e tests', () => {

  it('has error', () => {
    cy.visit('https://zishop.vercel.app/login')
    cy.get('#email').fill('qwerty@gmail.com');
    cy.get('#password').fill('Qwerty');
    cy.get('[type="submit"]').click();

    cy.get('.text-rose-600').should('have.text', 'Invalid email or password')
  })
})


