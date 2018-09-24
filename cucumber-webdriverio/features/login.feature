Feature: Login into losestudiantes
    As an user I want to authenticate myself within losestudiantes website in order to rate teachers

Scenario: Login failed
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a wrong email and password
    And I try to login
    Then I expect to not be able to login

Scenario: Login failed with some data correct
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a correct email and incorrect password
    And I try to login
    Then I expect to not be able to login

Scenario: Login failed with some data correct
    Given I go to losestudiantes home screen
    When I open the login screen
    And I fill a correct email and correct password
    And I try to login
    Then I expect to login
