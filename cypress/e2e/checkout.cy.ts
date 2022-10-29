/// <reference path="../support/index.d.ts" />
import { User, createUser } from '../support/generate'

describe('Checkout', () => {
  let user: User
  describe('Free Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy free games', () => {
      cy.visit('/signup')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`, { timeout: 5000 })

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/free/i).click()
      cy.url().should('contain', 'price_lte=0')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      cy.findByText(/free to play, click buy now and enjoy!/i, {
        timeout: 5000
      }).should('exist')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/signin')
      cy.signIn(user.email, user.password)
      cy.findByText(user.username).click()
      cy.getByDataCy('nav-user-dropdown').within(() => {
        cy.findByText(/my profile/i).click()
      })

      cy.findByText(/my orders/i).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/profile/orders`, {
        timeout: 10000
      })

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })

  describe('Paid Games', () => {
    before(() => {
      user = createUser()
    })

    it('should buy paid games', () => {
      cy.visit('/signup')
      cy.signUp(user)
      cy.url().should('eq', `${Cypress.config().baseUrl}/`, { timeout: 5000 })

      cy.findByRole('link', { name: /explore/i }).click()
      cy.url().should('eq', `${Cypress.config().baseUrl}/games`)

      cy.findByText(/highest to lowest/i).click()
      cy.location('href').should('contain', 'sort=price%3Adesc')

      cy.addToCartByIndex(0)

      cy.findAllByLabelText(/cart items/i)
        .first()
        .should('have.text', 1)
        .click()

      cy.getByDataCy('cart-list').within(() => {
        cy.findByText(/buy it now/i).click()
      })

      cy.findByRole('button', { name: /buy now/i }).should(
        'have.attr',
        'disabled'
      )

      cy.fillElementsInput('cardNumber', '4242424242424242')
      cy.fillElementsInput('cardExpiry', '1040')
      cy.fillElementsInput('cardCvc', '103')

      cy.findByRole('button', { name: /buy now/i }).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/success`)

      cy.findByRole('heading', {
        name: /Your purchase was successful!/i
      }).should('exist')
    })

    it('should show games in order page', () => {
      cy.visit('/signin')
      cy.signIn(user.email, user.password)
      cy.findByText(user.username).click()
      cy.getByDataCy('nav-user-dropdown').within(() => {
        cy.findByText(/my profile/i).click()
      })

      cy.findByText(/my orders/i).click()

      cy.url().should('eq', `${Cypress.config().baseUrl}/profile/orders`, {
        timeout: 10000
      })

      cy.getByDataCy('game-item').should('have.length', 1)
    })
  })
})
