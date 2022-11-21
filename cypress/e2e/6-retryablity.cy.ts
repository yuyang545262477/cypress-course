describe("Retry Ability demo", () => {
    // it("visit with delay", () => {
    //     cy.visit("/loaddelay", {});
    // });
    // it("click delay btn", () => {
    //     cy.visit("/clientdelay");
    //     cy.get("#ajaxButton").click();
    //     cy.wait(16 * 1000);
    //     cy.get(".bg-success").should("exist");
    // });
    it("process bar scenario", () => {
        cy.visit("/progressbar");
        cy.get("#startButton").click();
        cy.get("#progressBar", {timeout: 30 * 1000}).should("have.text", "100%");
    });
});
