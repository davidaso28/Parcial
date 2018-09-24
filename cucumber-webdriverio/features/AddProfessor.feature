Feature: Add Professor
    As an user I want to add a profesr

Scenario: Adding Correctly
  Given I go to losestudiantes home screen
  When I open the login screen
  And I fill a correct email and correct password
  And I try to login
  And I find Mario Villamizar
  And I click add professor button
  And I fill the addition form correctly
  Then I expect to see a confirmation message

  Scenario: Adding Correctly repeated
    Given I go to losestudiantes home screen
    When I find Mario Villamizar
    And I click add professor button
    And I fill the addition form correctly repeated
    Then I expect to see an repeated professor message

  Scenario: Adding incorrectly
    Given I go to losestudiantes home screen
    When I find Mario Villamizar
    And I click add professor button
    And I fill the addition form incorrectly
    Then I expect to see an error message
