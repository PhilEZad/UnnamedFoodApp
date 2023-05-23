"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvConverter = void 0;
var fs = require("fs");
var fireservice_1 = require("./fireservice");
var CsvConverter = /** @class */ (function () {
    function CsvConverter() {
    }
    CsvConverter.prototype.open = function (path) {
        return fs.readFileSync(path, 'utf8');
    };
    CsvConverter.prototype.convert = function (file) {
        var lines = this.open(file).split('\n');
        var result = [];
        var headers = lines[0].split(',');
        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var currentline = lines[i].split(',');
            for (var j = 0; j < headers.length; j++) {
                obj[headers[j]] = currentline[j];
                if (obj[headers[j]] == undefined || obj[headers[j]] == null) {
                    obj[headers[j]] = "";
                }
            }
            result.push(obj);
        }
        var service = new fireservice_1.FireService();
        return result.forEach(function (element) {
            var data = 0;
            if (element !== undefined)
                data = element;
            service.writeData("foodItems", data);
        }); //JavaScript object
        // return JSON.stringify(result); //JSON
    };
    return CsvConverter;
}());
exports.CsvConverter = CsvConverter;
