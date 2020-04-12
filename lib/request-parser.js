const rx = require('rxjs');
const fs = require('fs');

// Jsonの拡張子
const jsonExtension = '.json';

module.exports = {
    requestJsonPath
}

/**
 * Request対象のjsonのパスを確認する
 *
 * @param {*} dataBasePath
 * @param {*} request
 * @returns
 */
function requestJsonPath(dataBasePath, request) {
    return new rx.Observable(subscriber => {
        // リクエストパスを取得する
        let baseUrl = request.baseUrl;
        // jsonのパスを生成
        let jsonPath = dataBasePath + baseUrl + jsonExtension;
        
        if (fs.existsSync(jsonPath)) {
            // ファイルが存在する場合
            subscriber.next(jsonPath);
            subscriber.complete();
        } else {
            // ファイルが存在しない場合エラー
            let error = new Error('Not found path');
            subscriber.error(error);
        }
    });
}