Feature: Sauce Demo Login Functionality

@regression
Scenario Outline: Login with Valid Credentials
Given User is on the sauce demo login page
When User enter username as "<username>"
And User enter password as "<password>"
And User clicks on login button
Then User should be able to view the dashboard page

Examples:
|username|password|
|standard_user|secret_sauce|
# |problem_user|secret_sauce|