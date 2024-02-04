export class Utils{
    constructor()
        {
        }
        async importFile(fileName)
        {
            const file =require('../data/${fileName}.json');
            return file;
        }
    
}