describe("empty spec", () => {
    before(() => {
        cy.log("hello from the before hook");
    });
    after(() => {
        cy.log("hello from the after hook");
    });
    beforeEach(() => {
        cy.log("hello from the beforeEach hook");
    });
    afterEach(() => {
        cy.log("hello from the afterEach hook");
    });
    it("testcase #1", () => {
        cy.log("hello world");
    });
    it("testcase #2", () => {
        cy.log("hello world");
    });
    it.only("testcase #3", () => {
        cy.log("hello world");
    });
    it("testcase #4", () => {
        cy.log("hello world");
    });
});
