describe("Form presence test", () => {
  it("should have the form in the document", () => {
    cy.visit("http://localhost:5173"); // Replace with your actual URL
    cy.get("form").should("be.visible");
    cy.get('input[type="email"]').type("vimalramk99@gmail.co");
    cy.get('input[type="email"]').blur();
  });
});

describe("Element Width Range Test", () => {
  const viewports = [
    { width: 500, height: 800 }, // Adjust height as needed
    { width: 600, height: 800 },
    { width: 700, height: 800 },
  ];

  viewports.forEach((viewport) => {
    it(`should display correctly at ${viewport.width}px width`, () => {
      cy.viewport(viewport.width, viewport.height);
      cy.visit("http://localhost:5173"); // Replace with your actual URL

      // Example assertion, adjust selector and expected value as needed
      cy.get("[input[type = 'email']]")
        .should("be.visible")
        .and("have.css", "width", `${viewport.width}px`);
    });
  });
});