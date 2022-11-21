describe("basic", () => {
    before(() => {
        cy.visit("/textinput");
    });
    it("visit explanation text input", () => {
        cy.url().then(url => {
            cy.log(url);
            expect(url).to.contain("textinput");
        });
    });
    it("title validation", () => {
        cy.title().should("contain", "Text Input");
    });
    it("input challenge", () => {
        cy.get("input#newButtonName").type("Hello from Input");
        cy.get("button#updatingButton").click().should("have.text", "Hello from Input");
    });
});
