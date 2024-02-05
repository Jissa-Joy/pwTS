export class Utils{
    static importFile(arg0: string): any {
        throw new Error("Method not implemented.");
    }
    constructor()
        {
        }
        async importFile(fileName)
        {
            const file =require('../tests/data/${fileName}.json');
            return file;
        }
    
}