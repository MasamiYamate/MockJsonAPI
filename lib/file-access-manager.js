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
    // ただのエイリアスメソッドになってるが、今後クエリからの絞り込みも実装するので一旦このまま
    return new rx.Observable(subscriber => {
        let json = loadJson(requestPath);
        subscriber.next(json);
        subscriber.complete();
    })
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