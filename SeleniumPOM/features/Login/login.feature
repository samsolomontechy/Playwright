Feature: OrangeHRM Login

  Scenario: Successful login with valid credentials
    Given I am on the OrangeHRM login page
    When I enter valid username and password
    And I click on the login button
    Then I should see the dashboard

  Scenario: Unsuccessful login with invalid credentials
    Given I am on the OrangeHRM login page
    When I enter invalid username and password
    And I click on the login button
    Then I should see an error message
