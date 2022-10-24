/// <reference path="../support/index.d.ts" />

describe('Reset Password', () => {
  it('should show an error if passwords do not match', () => {
    cy.visit('/reset-password')

    cy.findAllByPlaceholderText(/new password/i).type('1234')
    cy.findAllByPlaceholderText(/confirm password/i).type('4321')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText(/passwords do not match/i).should('exist')
  })

  it('should show an error if the request code is invalid', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              messages: [
                {
                  message: 'Incorrect params provided.'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password?code=wrong-code')

    cy.findAllByPlaceholderText(/new password/i).type('1234')
    cy.findAllByPlaceholderText(/confirm password/i).type('1234')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.findByText('Incorrect params provided.').should('exist')
  })

  it('should reset password, sign in and redirect to the homepage', () => {
    cy.intercept('POST', '**/auth/callback/credentials*', {
      statusCode: 200,
      body: { user: {} }
    })

    cy.intercept('POST', '**/auth/reset-password', {
      statusCode: 200,
      body: { user: { email: 'e2e@wongames.com' } }
    })

    cy.intercept('GET', '**/auth/session*', {
      statusCode: 200,
      body: { user: { name: 'e2etest' } }
    })

    cy.visit('/reset-password?code=right-code')

    cy.findAllByPlaceholderText(/new password/i).type('1234')
    cy.findAllByPlaceholderText(/confirm password/i).type('1234')
    cy.findByRole('button', { name: /reset password/i }).click()

    cy.url().should('eq', `${Cypress.config().baseUrl}/`)
    cy.findByText(/e2etest/i).should('exist')
  })
})
