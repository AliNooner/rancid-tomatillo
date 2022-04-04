describe("Single Movie view flow", () => {
  it("Should be able to display movie poster on load", () => {
    cy.visit("http://localhost:3000/718444");
    cy.get("img").should("be.visible");
  });

  //x-button
  it("It should display a button to return user to home page", () => {
    cy.get(".x-button").click().url().should("eq", "http://localhost:3000/");
  });

  //404 error handling
  it("Should display error message for 404 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/718444").contains(
      "h1",
      "Oops! Something went wrong!"
    );
  });

  //500 error handling
  it("Should display error message for 500 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500,
    });
    cy.visit("http://localhost:3000/718444").contains(
      "h1",
      "Oops! Something went wrong!"
    );
  });

  // header
  it("Should have a header with text Rancid Tomatillos on load", () => {
    cy.visit("http://localhost:3000/").contains("Rancid Tomatillos");
  });
});
