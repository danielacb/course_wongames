/// <reference path="../support/index.d.ts" />
import { createUser } from '../support/generate'

describe('User', () => {
  it('should sign up', () => {
    const user = createUser()

    cy.visit('/signup')

    cy.signUp(user)

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(user.username, { timeout: 5000 }).should('exist')
  })

  it('should sign in and sign out', () => {
    cy.visit('/sign-in')
    cy.signIn()

    cy.findByText(/e2etest/i)
      .should('exist')
      .click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/cypress/i).should('not.exist')
  })
})
