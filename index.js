const express = require('express');
const bodyParser = require('body-parser');
const requestParser = require('./lib/request-parser');
const fileAccess = require('./lib/file-access-manager');
const app = express();

const dataDirectory = process.cwd() + "/data";

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
    let result = fileAccess.responseData(observer);
    result.subscribe(result => {
        successResponse(result, response);
    }, error => {
        errorResponse(error, response);
    });
});

function successResponse(result, response) {
    const statusCode = result.statusCode ?? null;
    const responseBody = result.body ?? null;
    if (statusCode == null) {
        const message = "Not found status code";
        const error = new Error(message);
        errorResponse(error, response);
    } else if (responseBody == null) {
        const message = "Not found response body";
        const error = new Error(message);
        errorResponse(error, response);
    } else {
        response.status(statusCode).json(responseBody);
    }
}

function errorResponse(error, response) {
    const errorCode = 404;
    const errorMessage = error.message ?? "Unknown error";
    response.status(errorCode).json(errorMessage);
}