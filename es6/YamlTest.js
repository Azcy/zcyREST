const fs = require("fs");
const YAML = require('yamljs');
const yaml = require('js-yaml');

const yaml_global = yaml.safeLoad(fs.readFile('../date/GLOBAL.yaml', 'utf8'));
const yaml_local = yaml.safeLoad(fs.readFile('../date/HAT_SAAS.yaml', 'utf8'));


module.exports=yaml_global;
module.exports=yaml_global;

/*
try {
    var data = YAML.parse(fs.readFileSync('../date/GLOBAL.yaml').toString());
    console.log(data);
    var host = data.MODEL;
    var paths = Object.keys(data.ATTR);
    //var value = Object.getOwnPropertyDescriptor(paths[0])

    //console.log(host);
    console.log(paths);
   // console.log(value)
}catch (e) {
    console.log(e);
}
*/
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
