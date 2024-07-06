const { defineConfig } = require('cypress');
//const { beforeRunHook, afterRunHook } = require('node_modules/cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  //reporter : 'reporters/custom.js',
  retries: {
     runMode: 2,
     openMode: 1
   },

  
  //  reporterOptions: {
  //    reportDir: 'cypress/reports',
  //    charts: true,
  //    reportPageTitle: 'custom-title',
  //    embeddedScreenshots: true,
  //    inlineAssets: true,
  //    saveAllAttempts: false
  //  },
  e2e: {

    //baseUrl: 'https://www.amazon.in/',
   
    //baseUrl: 'https://www.letskodeit.com/',
    //baseUrl: 'https://practice-automation.com/',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl: 'https://automationexercise.com/',
    specPattern: 'cypress/integration/specs/*.cy.js',
    testIsolation: false
  }
});
