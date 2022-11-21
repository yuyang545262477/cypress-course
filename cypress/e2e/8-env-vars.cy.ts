describe("Environment Varible Demo", () => {
    it("Demo", () => {
        cy.log(`Printing  Environment Varible value:${Cypress.env("demoVar")}`);
    });
});
