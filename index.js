const express = require('express');
const rx = require('rxjs');
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
    let observer = requestParser.requestJsonPath(dataDirectory, request);
    console.log(observer);
    let result = fileAccess.responseData(observer);
    result.subscribe(result => {
        console.log(result);
        response.json(result);
    })
});