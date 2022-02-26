# OPTION:

# Feature: The Internet Guinea Pig Website

#   Scenario Outline: As a user, I can log into the secure area

#     Given I am on the login page
#     When I login with <username> and <password>
#     Then I should see a flash message saying <message>

#     Examples:
#       | username | password             | message                        |
#       | tomsmith | SuperSecretPassword! | You logged into a secure area! |
#       | foobar   | barfoo               | Your username is invalid!      |

# OPTION:

# Feature: Oracle login test

#   Scenario Outline: Invalid login user

#     Given User has opened Oracle Profile page
#     When User inputs wrong email
#     And User inputs wrong password
#     And User presses sign in button
#     Then User sees invalid credentials message

# OPTION:

Feature: Oracle login test

  @login
  Scenario Outline: Invalid login user

    Given User has opened Oracle Profile page
    When User inputs <email> as the email
    And User inputs <password> as the password
    And User presses sign in button
    Then User sees invalid credentials message

    Examples:
      | email              | password             |
      | 123asd@gmail.com   | Password123          |
      | gghhdy@gmail.com   | Password123gg        |
      | oiu723@gmail.com   | Password7231233      |
