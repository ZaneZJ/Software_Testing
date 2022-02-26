import { BasePage } from "../pageobjects/basePage";

class Pages {
    constructor() {
        this.basePage = new BasePage();
    }
}

export const pages = new Pages();