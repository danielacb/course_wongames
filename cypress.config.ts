import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  component: {
    devServer: {
      framework: 'next',
      bundler: 'webpack'
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}'
  },
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})
