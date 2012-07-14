require('js-yaml');
var YAML = require('json2yaml');

var fs   = require('fs');

var args = process.argv;
if(args.length > 2 && args[2] == "install") {
  var yamlFile  = process.cwd() + '/package.yml';
  var jsonFile = process.cwd() + '/package.json';

  if(fs.existsSync(yamlFile)) {
    // YAML file exists, write to JSON
    try {
      var jsonString = JSON.stringify(require(yamlFile), null, 4);
      fs.writeFileSync(jsonFile, jsonString);
    } catch(e) {}
  } else if(fs.existsSync(jsonFile)) {
    // No YAML file but a JSON file. Parse JSON to YAML
    try {
      var yamlString = YAML.stringify(require(jsonFile));
      fs.writeFileSync(yamlFile, yamlString);
    } catch(e) {}
  }
}