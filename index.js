var express = require('express')
var cors = require('cors')
var app = express()
const fetch = require('node-fetch');
require('dotenv').config();

app.use(cors())

app.get('/collections', function (req, res, next) {
    fetch(process.env.ENDPOINT, {
        "headers": {
          "accept": "*/*",
          "Host": process.env.HOST,
          "authority": process.env.HOST,
          "Postman-Token": "64942976-819f-4634-b7ea-b650eb6d34d3",
          "accept-language": "en-GB,en;q=0.9",
          "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Brave\";v=\"108\"",
          "sec-ch-ua-mobile": "?0",
          "sec-ch-ua-platform": "\"Windows\"",
          "sec-fetch-dest": "empty",
          "sec-fetch-mode": "cors",
          "sec-fetch-site": "cross-site",
          "sec-gpc": "1",
          "Referrer-Policy": "strict-origin-when-cross-origin",
          "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
        },
        "body": null,
        "method": "GET"
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        res.json({data});
      });
})

app.get('/collectionDetails', function (req, res, next) {
  fetch(process.env.ENDPOINT_DETAIL + '=' + req.query['symbol'], {
      "headers": {
        "accept": "*/*",
        "Host": process.env.HOST,
        "authority": process.env.HOST,
        "Postman-Token": "64942976-819f-4634-b7ea-b650eb6d34d3",
        "accept-language": "en-GB,en;q=0.9",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Brave\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
      },
      "body": null,
      "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.json({data});
    });
})

app.get('/listing', function (req, res, next) {
  fetch(process.env.ENDPOINT_SHOP + '=' + req.query['symbol'], {
      "headers": {
        "accept": "*/*",
        "Host": process.env.HOST,
        "authority": process.env.HOST,
        "Postman-Token": "64942976-819f-4634-b7ea-b650eb6d34d3",
        "accept-language": "en-GB,en;q=0.9",
        "sec-ch-ua": "\"Not?A_Brand\";v=\"8\", \"Chromium\";v=\"108\", \"Brave\";v=\"108\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "sec-gpc": "1",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36"
      },
      "body": null,
      "method": "GET"
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
      res.json({data});
    });
})


app.listen(8081, function () {
  console.log('CORS-enabled web server listening on port 8081')
})

module.exports = app;
