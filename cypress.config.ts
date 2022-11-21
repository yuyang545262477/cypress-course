import {defineConfig} from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: "http://uitestingplayground.com",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        env: {
            demoVar: "hello from the cypress.config.ts",
            Angular: "https://www.baidu.com",
            demoQA: "https://demoqa.com",
            theInternet: "https://the-internet.herokuapp.com",
        },
    },
    pageLoadTimeout: 60 * 1000,
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
});
