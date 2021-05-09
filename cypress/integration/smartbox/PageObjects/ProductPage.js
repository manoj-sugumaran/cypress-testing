class ProductPage {
    getAddCartBtn() {
        return cy.get('.add-to-cart--primary > a');
    }
    getGoToCartBtn() {
        return cy.get('#addtocart-confirmation a.button.primary');
    }
}
export default ProductPage