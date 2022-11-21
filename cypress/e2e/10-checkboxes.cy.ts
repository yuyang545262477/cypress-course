describe("Demo QA", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("demoQA")}/checkbox`);
    });
    it("checkbox scenario", () => {
        cy.get("[type=\"checkbox\"]").check({force: true}).should("be.checked");
    });
});

describe.only("the internet app", () => {
    beforeEach(() => {
        cy.visit(`${Cypress.env("theInternet")}/checkboxes`);
    });
    it("checkbox scenario", () => {
        cy.get("[type=\"checkbox\"]").eq(0).click().should("be.checked");
    });
});

