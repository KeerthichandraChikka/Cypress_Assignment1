const { defineConfig } = require('cypress');

module.exports = defineConfig({
  retries: {
     runMode: 2,
     openMode: 1
   },
   
   reporter: 'cypress-multi-reporters',
    reporterOptions: {
        reporterEnabled: 'mochawesome',
        mochawesomeReporterOptions: {
            reportDir: 'cypress/reports/mocha',
            quite: true,
            overwrite: true,
            html: true,
            json: true
        }
    },
    
  e2e: {

    //baseUrl: 'https://www.amazon.in/',
   
    //baseUrl: 'https://www.letskodeit.com/',
    //baseUrl: 'https://practice-automation.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/integration/specs/*.cy.js',
    testIsolation: false
  }
});
