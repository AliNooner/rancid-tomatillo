// describe('User Movie Info Page Flows', () => {
//   beforeEach(() => {
//     cy.singleMovieInfo();
//   });

// true testing
// describe("Single movie page flow", () => {
//     beforeEach(() => {
//       cy.singleMovieInfo();
//     });
describe('Single Movie view flow', () => {
   it('Should be able to display movie poster on load', () => {
    cy.visit('http://localhost:3000/718444')
    cy.get('img').should('be.visible')
   })

  it("Should confirm that true is equal to true", () => {
    expect(true).to.equal(true);
  });

//x-button
it("It should display a button to return user to home page", () => {
  cy.get(".x-button")
    .click()
    .url().should("eq", "http://localhost:3000/")
    // .url().should("not eq", "http://localhost:3000/718444")
})

//test for missing data

// header?
it("Should have a header with text Rancid Tomatillos on load", () => {
  cy.visit("http://localhost:3000/").contains("Rancid Tomatillos");
});
//trailer?
});
