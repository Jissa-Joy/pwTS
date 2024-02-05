import { Page, Locator,Cookie} from "@playwright/test";


export default class Register{
   readonly page: Page ;
    readonly firstName: Locator;
   readonly lastName: Locator;
   readonly address: Locator;
    readonly city: Locator;
  readonly  state: Locator;
   readonly zip: Locator;
   readonly phone: Locator;
  readonly  ssn: Locator;
    readonly userName: Locator;
  readonly  pwd: Locator;
   readonly confirmPwd: Locator;
   readonly regButton: Locator;

    constructor(page:Page){

        this.page= page;

        this.firstName = page.locator('[id="customer\\.firstName"]');
        this.lastName= page.locator('[id="customer\\.lastName"]');
        this.address= page.locator('[id="customer\\.address\\.street"]');
        this.city= page.locator('[id="customer\\.address\\.city"]');
        this.state= page.locator('[id="customer\\.address\\.state"]');
        this.zip= page.locator('[id="customer\\.address\\.zipCode"]');
        this.phone= page.locator('[id="customer\\.phoneNumber"]');
        this.ssn= page.locator('[id="customer\\.ssn"]');
        this.userName= page.locator('[id="customer\\.username"]');
        this.pwd= page.locator('[id="customer\\.password"]');
        this.confirmPwd= page.locator('#repeatedPassword');
   
        this.regButton=page.getByRole('button', { name: 'Register' })

    }

    async navigate(url: string){
        await this.page.goto(url);
        }


    async registerUser(fname,lname,addr,city,state,zip,phone,ssn,userName,password,confirmPwd){
        await this.firstName.fill(fname);
        await this.lastName.fill(lname);
        await this.address.fill(addr);
        await this.city.fill(city)
        await this.state.fill(state);
        await this.zip.fill(zip)
        await this.phone.fill(phone)
        await this.ssn.fill(ssn);
        await this.userName.fill(userName)
        await this.pwd.fill(password)
        await this.confirmPwd.fill(confirmPwd);
        await this.regButton.click();

    }

}