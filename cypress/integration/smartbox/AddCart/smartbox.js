import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
import HomePage from '../PageObjects/HomePage';
import ProductPage from '../PageObjects/ProductPage';
import CartPage from '../PageObjects/CartPage';

//Object Creation for PageObject Page Class and assigning it to a constant variable

const homePage=new HomePage();
let productUrl;
const productPage= new ProductPage();
const cartPage=new CartPage();
    
//test steps 
Given('As a Customer I am on homepage {string}', (url) => {
    cy.log(url);
    cy.visit(url);
});

When ('I click on a random box from the ‘Our popular box’ section', () => {
    homePage.getProuductUrl().then(($a) => {
        productUrl = $a.attr('href');
    });
    homePage.getPopularBox().first().click();
});

And ('Once on box page click ‘Add to cart button’', () => {
    cy.url().should('eq', productUrl) // => true
    productPage.getAddCartBtn().first().click();
});

Then ('The product added to cart is on shopping cart page' , () => {
    productPage.getGoToCartBtn().first().click();
    cartPage.getCartItems().first().then(($a) => {
        expect($a.attr('href')).equal(productUrl)
    });
});
