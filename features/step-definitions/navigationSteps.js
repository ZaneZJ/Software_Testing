import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from "../support/tests"

Given("User has opened Oracle Profile page", async function() {
    // console.log("User has opened Oracle Profile page");
    await tests.navigationTest.openOracleProfilePage();
});

When("User presses sign in button", async function() {
    // console.log("User presses sign in button");
    await tests.navigationTest.pressSignInButton();
    await browser.pause(3000);
});

When("User presses on Create Account button", async function() {
    console.log("User presses on Create Account button");
});

When("User presses the Sign Up buttton", async function() {
    console.log("User presses the Sign Up buttton");
});

Then("User is redirected to Check Your Email page", async function() {
    console.log("User is redirected to Check Your Email page");
});