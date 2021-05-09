class CartPage {
    getCartItems(url) {
        return cy.get('#form-product-14374 a');
    }
}
export default CartPage