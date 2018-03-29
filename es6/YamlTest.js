const yaml = require('js-yaml');
const fs = require("fs");
try {
    var doc = yaml.safeLoad(fs.readFileSync('../date/GLOBAL.yaml', 'utf8'));
    console.log(doc);
} catch (e) {
    console.log(e);
}
//var host = data.paths;
//var paths = Object.keys(data.paths);
//var value=Object.values(paths)
//console.log(host);
//console.log(paths);
//console.log("value:"+value)


var str = "123, 124, 234,252";
var arr = str.split(",").map(function (val) {
    return Number(val) + 1;
});
console.log(arr)