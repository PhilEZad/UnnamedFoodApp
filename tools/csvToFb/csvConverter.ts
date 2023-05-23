import * as fs from "fs";
import {FireService} from "./fireservice";
export class CsvConverter {

    categories: string[];


    open(path: string) {
        return fs.readFileSync(path, 'utf8');
    }

    convert(file: string) {
        let lines = this.open(file).split('\n');
        let result = [];
        let headers = lines[0].split(',');
        for (let i = 1; i < lines.length; i++) {
            let obj = {};
            let currentline = lines[i].split(',');
            for (let j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];

                if (obj[headers[j]] == undefined || obj[headers[j]] == null) {
                    obj[headers[j]] = "";
                }
            }
            result.push(obj);
        }

        const service: FireService = new FireService();

        return result.forEach(
            (element: any) => {
                let data = 0;
                if (element !== undefined)
                    data = element;

              service.writeData("foodItems", data)
            }
        ); //JavaScript object
        // return JSON.stringify(result); //JSON
    }
}