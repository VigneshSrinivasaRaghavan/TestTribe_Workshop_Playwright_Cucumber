Feature: Adding Item in Sauce Demo Page

@smoke
Scenario Outline: Add an item in the Sauce Demo
Given User is on the sauce demo login page
When User enter username as "<username>"
And User enter password as "<password>"
And User clicks on login button
And User adds an item to the cart
And User clicks on the cart button
Then User should see the item added

Examples:
|username|password|
|standard_user|secret_sauce|