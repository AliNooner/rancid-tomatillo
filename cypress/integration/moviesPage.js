// true testing
describe("Load", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });

  // header title
  it("Should have a header with text Rancid Tomatillos on load", () => {
    cy.visit("http://localhost:3000/").contains("Rancid Tomatillos");
  });

  //form
  it("Should contain a search bar", () => {
    cy.get('form input[placeholder="Search title here"]')
      .get('form input[type="text"]')
      .get('form input[name="search"]');
  });

  //404 error handling
  it("Should display error message for 404 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/").contains(
      "h1",
      "Oops! Something went wrong!"
    );
  });

  //500 error handling
  it("Should display error message for 500 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 500,
    });
    cy.visit("http://localhost:3000/").contains(
      "h1",
      "Oops! Something went wrong!"
    );
  });

  //search button
  it("Should have a button that reads Search", () => {
    cy.get(".search-button").contains("SEARCH");
    cy.contains("X").should("not.exist");
  });

});
