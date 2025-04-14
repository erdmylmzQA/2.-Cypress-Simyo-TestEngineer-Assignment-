import { defineConfig } from "cypress";
import  * as createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

export default defineConfig({
  retries:2,
  reporter: 'cypress-mochawesome-reporter',
  e2e: {
    baseUrl: "https://simyo.nl/",
    watchForFileChanges:true,
    video:true,
    // screenshotOnRunFailure:true,
    defaultCommandTimeout:4000,
    experimentalRunAllSpecs :true,
    specPattern: "**/*.{feature,spec.js,cy.js}",
    
    async setupNodeEvents(
      on: Cypress.PluginEvents,
      config: Cypress.PluginConfigOptions
    ): Promise<Cypress.PluginConfigOptions> {
    
      await addCucumberPreprocessorPlugin(on, config);
      require('cypress-mochawesome-reporter/plugin')(on);

      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );
      

      // Make sure to return the config object as it might have been modified by the plugin.
      return config;
    },
  },
  screenshotsFolder: "cypress/downloads/screenshots",
  videosFolder: "cypress/downloads/videos",
 
});