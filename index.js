const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Expressの初期設定
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// 待ち受けの開始
app.listen(3000, function(){
    console.log("Launch up prot 3000");
});

//全てのリクエストに対する処理を行う
app.use('/*', function(request, response, next) {
    console.log("aaaa");
});