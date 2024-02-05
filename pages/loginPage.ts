import { Locator, Page, expect, Cookie} from "@playwright/test";


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
    async navigate1(url1: string){
        await this.page.goto(url1);
        }
    async loginUser(user1, password1)
    {
        await this.Username.fill(user1);
        await this.Password.fill(password1);
        await this.LoginButton.click();
    }



}

