const fileSystem = require('fs');

module.exports = {
    loadJson
}

function loadJson(path) {
    let json = JSON.parse(fileSystem.readFileSync(path, 'utf-8'));
    return json;
}