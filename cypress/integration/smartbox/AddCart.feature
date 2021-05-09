Feature: Add a box to the cart
I want to add a box to the cart
Scenario: I want to find a desired box and add it to the cart

Given As a Customer I am on homepage "https://www.smartbox.com/ie/"
When I click on a random box from the ‘Our popular box’ section
And Once on box page click ‘Add to cart button’
Then The product added to cart is on shopping cart page