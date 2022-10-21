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
    cy.visit('/signin')
    cy.signIn()

    cy.findByText(/e2etest/i)
      .should('exist')
      .click()
    cy.findByText(/sign out/i).click()

    cy.findByRole('link', { name: /sign in/i }).should('exist')
    cy.findByText(/cypress/i).should('not.exist')
  })

  it('should sign the user and redirect to the page that it was previously defined', () => {
    cy.visit('/profile/me')
    cy.location('href').should(
      'eq',
      `${Cypress.config().baseUrl}/signin?callbackUrl=/profile/me`
    )

    cy.signIn()

    cy.location('href').should('eq', `${Cypress.config().baseUrl}/profile/me`)

    cy.findByLabelText(/username/i).should('have.value', 'e2etest')
    cy.findByLabelText(/e-mail/i).should('have.value', 'e2e@wongames.com')
  })
})
