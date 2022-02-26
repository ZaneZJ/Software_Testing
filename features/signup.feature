Feature: Oracle sign up test

    # npm run cucumber -- --cucumberOpts.tagExpression='@signup'

    @signup
    Scenario: Sign up with new user

        Given User has opened Oracle Profile page
        When User presses on Create Account button
        And User fills out create account form
        And User presses the Sign Up buttton
        Then User is redirected to Check Your Email page