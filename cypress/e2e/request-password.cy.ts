/// <reference path="../support/index.d.ts" />

describe('Request Password', () => {
  it('should fill the input and recieve a success message', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 200,
        body: { ok: true }
      })

      expect(res.body.email).to.eq('resetpwd@wongames.com')
    })

    cy.visit('/reset-password/new')

    cy.findAllByPlaceholderText(/email/i).type('resetpwd@wongames.com')
    cy.findByRole('button', { name: /send reset email/i }).click()

    cy.findByText(/e-mail sent!/i).should('exist')
  })

  it('should show an error when using an invalid email', () => {
    cy.intercept('POST', '**/auth/reset-password', (res) => {
      res.reply({
        status: 400,
        body: {
          error: 'Bad Request',
          message: [
            {
              message: [
                {
                  message: 'This email does not exist.'
                }
              ]
            }
          ]
        }
      })
    })

    cy.visit('/reset-password/new')

    cy.findAllByPlaceholderText(/email/i).type('dontexist@wongames.com')
    cy.findByRole('button', { name: /send reset email/i }).click()

    cy.findByText('This email does not exist.').should('exist')
  })
})
