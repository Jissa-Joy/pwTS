import {test, expect} from "@playwright/test";
import { Utils } from "../utils/main";
import Register from "../pages/registerPage";
import loginPage from "../pages/loginPage";



let login;
let user
const util = new Utils;

test.describe("TC1", () => {
    test.beforeEach(async({ page})=> {

        login = new loginPage(page);
        user = await util.importFile('users')

    })

  test("login test", async ({page}) => {
  
    
    await login.loginUser(user.usernames.username1, user.password.pwd1);
  
  });

});








test("register Test", async ({page}) => {

    const reg = new Register(page);

});

function async(arg0: { page: any; }): (args: import("@playwright/test").PlaywrightTestArgs & import("@playwright/test").PlaywrightTestOptions & import("@playwright/test").PlaywrightWorkerArgs & import("@playwright/test").PlaywrightWorkerOptions, testInfo: import("@playwright/test").TestInfo) => any {
    throw new Error("Function not implemented.");
}
