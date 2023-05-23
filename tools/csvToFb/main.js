"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var csvConverter_1 = require("./csvConverter");
var path = 'C:\\Users\\rouge\\OneDrive\\Desktop\\nutrition.csv';
var conv = new csvConverter_1.CsvConverter();
conv.convert(path);
