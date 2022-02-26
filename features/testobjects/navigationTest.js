import { pages } from "../support/pages";

export class NavigationTest {
    async openOracleProfilePage() {
        await browser.url('/');
        // or in the place of / can just place the URL of oracle profile
        await browser.pause(3000);
        await pages.basePage.getCreateAccountButton().waitForDisplayed({ timeout: 5000 });
    }

    async pressSignInButton() {
        await pages.basePage.getSignInButton().click();
    }
}