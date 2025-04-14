# Introduction 
Welcome to simyo-testengineer repository. This repository is designed to facilitate efficient and collaborative testing using Cucumber and Cypress. In this repository, we leverage the power of Gherkin syntax and BDD principles to create clear and understandable test scenarios for \"https://simyo.nl\" website.",

## Chosen Tools and Technologies
This project was developed using the following tools and technologies:

### **JavaScript**
JavaScript is used for this project, as it is a powerful, widely-used language with excellent community support and versatility.

### **Cypress**
Cypress is used for this project. It provides a fast, reliable, and developer-friendly way to test web applications. With its simple syntax and real-time reloading, Cypress allows for an efficient test process, ensuring the application functions as expected throughout the development lifecycle.

#### Why Cypress?
- It integrates well with JavaScript and is easy to set up, especially for end-to-end testing.
- Cypress provides an interactive interface that shows tests running in real-time, which improves the debugging process.

### **Cucumber BDD**
To write tests in a more human-readable format, I used **Cucumber BDD** (Behavior-Driven Development). This approach allows for tests to be written in plain language, which is beneficial for communication between technical and non-technical team members.

# Getting Started

1. To get started with using this repository, follow these steps:
    - Clone the Repository
    - Install Dependencies and browsers
    - Run the Tests from the scripts in package.json or from terminal directly
    - Analyze Test Reports, videos or screenshots

2.	Installation process :  
    - First check if node.js and npm is downloaded 
        - node -v, 
        - npm -v (if not, download from "node.js" official website)
    - Download cypress:
        - npm install cypress 
    - Click your “cypress.config.ts” file. If you see the errors, to fix the errors first download the cucumber: 
        - npm install @badeball/cypress-cucumber-preprocessor
    - Then download the additional dependency to fully initialize cucumber plugin:
        - npm install --save-dev @bahmutov/cypress-esbuild-preprocessor
    - Add cucumber dependencies in your "settings.json" file like the following: (To do that, In your Visual Studio Code, go to Settings—> Settings or Preferences —>Search “cucumber”, then click “Edit in settings.json” file)
        - "cucumberautocomplete.syncfeatures": "cypress/e2e/**/*.feature",
        - "cucumberautocomplete.steps": [ "cypress/support/step_definitions/**/*.js" ],
    - Download the desired browsers
        - https://www.microsoft.com/edge
        - https://www.mozilla.org/firefox/
        - https://www.google.com/chrome/

3.	Recommended dependencies :
    - Download "Cucumber (Gherkin) Full Support" extension from VS Code Extension Marketplace
    - "Material Icon Theme" is also be advised for a good visibility of files (useful for Cucumber icon etc.)
    - Prettier - Code formatter is advisable
    - npm install ts-loader --save-dev

# Build and Test
To run the tests of application use the commands below:

- 'npx cypress open' (navigates to cypress UI screen (GLI mode) where you can select E2E testing and then browser type)
- 'npm run all-scenarios-headed-chrome' (runs all scenarios in headed mode by chrome browser)
- 'npm run all-scenarios-headless-chrome' (runs all scenarios in headless mode by chrome browser)
- You can also see the scripts in 'package.json' file and run the tests with using the commands
