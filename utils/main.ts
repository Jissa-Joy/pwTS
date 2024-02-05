import { Page } from "@playwright/test";

export class Utils{
    page: Page;
    static importFile(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    constructor(page: Page)
        {
            this.page = page;
        }
        async importFile(fileName)
        {
            const file =require('../tests/data/${fileName}.json');
            return file;
        }
    
}