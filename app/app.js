'use strict';

//모듈
const express = require('express');
const app = express();

//라우팅
const home = require('./src/routes/home');

//앱세팅
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(express.static(`${__dirname}/src/public`));
app.use(express.json());

// URL을 통해 전달 되는 데이터에 한글 공백등과 같은 문자가 포함될 경우 제대로 인식되지 않는 문제를 해결
app.use(express.urlencoded({ extended: true }));

app.use('/', home); //use=> 미들웨어를 등록해주는 메서드.

module.exports = app;
