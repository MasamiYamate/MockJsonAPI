const rx = require('rxjs');
const fileSystem = require('fs');

module.exports = {
    responseData
}

/**
 *　RequestPathに一致するデータを取得する
 *
 * @param {*} requestPath
 * @returns responseData
 */
function responseData(requestPath) {
    return new rx.Observable(observer => {
        requestPath.subscribe({
            next(requestPath) {
                let json = loadJson(requestPath);
                observer.next(json);
            },
            error(err) {
                observer.error(err);
            },
            complete() {
                observer.complete();
            }
        });
    });
}

/**
 *　JSONをロードします
 *
 * @param {*} path
 * @returns JsonObject
 */
function loadJson(path) {
    let json = JSON.parse(fileSystem.readFileSync(path, 'utf-8'));
    return json;
}