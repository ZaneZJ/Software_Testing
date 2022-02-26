// import { Given, When, Then } from '@wdio/cucumber-framework';

// import LoginPage from '../pageobjects/login.page';
// import SecurePage from '../pageobjects/secure.page';

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

import { Given, When, Then } from '@wdio/cucumber-framework';
import { tests } from "../support/tests";

When("User inputs {word} as the email", async function(email) {
    // console.log("User inputs wrong email");
    await tests.loginTest.fillEmailField(email);
});

When("User inputs {word} as the password", async function(password) {
    // console.log("User inputs wrong password");
    await tests.loginTest.fillPasswordField(password);
    await browser.pause(3000);
});

Then("User sees invalid credentials message", async function() {
    // console.log("User sees invalid credentials message");
    await tests.loginTest.assertInvalidCledentialsMsg();
});