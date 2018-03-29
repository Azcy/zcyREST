const fs = require("fs");
const YAML = require('yamljs');

try {
    var data = YAML.parse(fs.readFileSync('../date/Data.yaml').toString());
    console.log(data);
    var host = data.MODEL;
    var paths = Object.keys(data.MODEL);
    var value = Object.getOwnPropertyDescriptor(paths[0])

    //console.log(host);
    console.log(paths);
    console.log(value)
}catch (e) {
    console.log(e);
}
//var host = data.paths;
//var paths = Object.keys(data.paths);
//var value=Object.values(paths)
/*console.log(host);
console.log(paths);
console.log("value:"+value)*/


/*
var str = "123, 124, 234,252";
var arr = str.split(",").map(function (val) {
    return Number(val) + 1;
});
console.log(arr)*/
