import {test, expect} from "@playwright/test";
import { Utils } from "../utils/main";
import Register from "../pages/registerPage";
import loginPage from "../pages/loginPage";
import Login from "../pages/loginPage";



test("TC1", async ({page}) => {

  const reg= new Register(page);
  const login = new Login(page);

  await reg.navigate("https://parabank.parasoft.com/parabank/register.htm")
  await login.navigate1('https://parabank.parasoft.com/parabank/index.htm;jsessionid=2314A94F794117BFA353444FCFA0C718');
  const user = await Utils.importFile('users');
  await login.loginUser(user.usernames.username1,user.password.pwd1)

});



/*test("TC1", () => {
    test.beforeEach(async({ page})=> {

        login = new loginPage(page);
        user = await util.importFile('users')

    })*/

 /* test("login test", async ({page}) => {
  
    
    await login.loginUser(user.usernames.username1, user.password.pwd1);
  
  });*/








test("register Test", async ({page}) => {

    const reg = new Register(page);

});

function async(arg0: { page: any; }): (args: import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions, testInfo: import("@playwright/test").TestInfo) => any {
    throw new Error("Function not implemented.");
}
