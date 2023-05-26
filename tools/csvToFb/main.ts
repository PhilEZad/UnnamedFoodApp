import {CsvConverter} from "./csvConverter";
import * as fs from "fs";

const path: string = 'C:\\Users\\rouge\\OneDrive\\Desktop\\nutrition.csv';

const conv: CsvConverter = new CsvConverter();
conv.convert(path);

