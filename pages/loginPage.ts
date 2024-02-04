import { Locator, Page, expect, Cookie} from "@playwright/test";
import { getCookies } from "undici-types";

export default class Login{
    readonly page: Page ;
    readonly Username: Locator;
    readonly Password: Locator;
    readonly LoginButton: Locator;

    constructor(page:Page){

        this.page= page;
        this.Username=page.locator('input[name="username"]');
        this.Password=page.locator('input[name="password"]');
        this.LoginButton=page.getByRole('button', { name: 'Log In' });


    }

    async loginUser(user1, password1)
    {
        await this.Username.fill(user1);
        await this.Password.fill(password1);
        await this.LoginButton.click();
    }



}

