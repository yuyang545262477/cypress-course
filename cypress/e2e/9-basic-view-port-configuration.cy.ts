describe("cy.viewPort() demo", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("Angular")}`);
    });

    it("device name", () => {
        cy.viewport("iphone-6");
        cy.get("#kw").should("be.visible");
    });
});
