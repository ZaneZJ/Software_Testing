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

When("User inputs wrong email", async function() {
    console.log("User inputs wrong email");
});

When("User inputs wrong password", async function() {
    console.log("User inputs wrong password");
});

Then("User sees invalid credentials message", async function() {
    console.log("User sees invalid credentials message");
});