Feature: Qualify teacher
    As an user I want to qualify teacer

Scenario: Correct Qualification
  Given I go to losestudiantes home screen
  When I open the login screen
  And I fill a correct email and correct password
  And I try to login
  And I find Mario Villamizar
  And I open qualification form
  And I fill the qualification form
  Then I expect to see my qualification

  Scenario: Retry same qualification
    Given I go to losestudiantes home screen
    And I find Mario Villamizar
    And I open qualification form
    And I fill the qualification form
    Then I expect to see that i can not rate the teacher again

Scenario: Delete qualification
    Given I go to losestudiantes home screen
    And I find Mario Villamizar
    And I delete qualification with text testds
    Then I expect not see my qualification with text testds
