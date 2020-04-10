const express = require('express');
const bodyParser = require('body-parser');
const requestParser = require('./lib/request-parser');
const fileAccess = require('./lib/file-access-manager');
const app = express();

let dataDirectory = process.cwd() + "/data";

// Expressの初期設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 待ち受けの開始
app.listen(3000, function(){
    console.log("Launch up prot 3000");
});

//全てのリクエストに対する処理を行う
app.use('/*', function(request, response, next) {
    let dataPath = requestParser.dataRequestPath(dataDirectory, request);
    let result = fileAccess.loadJson(dataPath);
    response.json(result);
});