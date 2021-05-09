class HomePage {
    getPopularBox() {
        return cy.get('.qa-popular-products div:nth-child(4) img');
    }

    getProuductUrl() {
        return cy.get('.popular-products div:nth-child(4) > a');
    }
}
export default HomePage