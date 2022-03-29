describe("Load", () => {
  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });

  it("Should have a header with text Rancid Tomatillos on load", () => {
    cy.visit("http://localhost:3000/").contains("Rancid Tomatillos");
  });

  it("Should contain a search bar", () => {
    cy.get('form input[placeholder="Search title here"]')
      .get('form input[type="text"]')
      .get('form input[name="title"]');
  });

  it("Should display error message for 404 status code", () => {
    cy.intercept("https://rancid-tomatillos.herokuapp.com/api/v2/movies", {
      statusCode: 404,
    });
    cy.visit("http://localhost:3000/").contains(
      "h1",
      "Oops! Something went wrong!"
    );
  });
});
