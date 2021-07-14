const axios = require("axios");
const https = require('https');
const config = require('../config');

module.exports = [
    {
        route: "/api",
        handle: function (req, res, next) {

            res.setHeader('Content-Type', 'application/json');
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Accept, X-Requested-With, Origin, Content-Type');

            // 中間証明書がない開発環境の場合の問題を回避する
            const httpsAgent = new https.Agent({ rejectUnauthorized: false });

            if (req.method === 'GET') {
                axios.get(config.api_root + req.originalUrl, {
                    httpsAgent
                }).then((response) => {
                    var result = undefined;
                    if (response.data) {
                        result = JSON.stringify(response.data);
                    }
                    res.end(result);
                }).catch((e) => {
                    res.status = '400';
                    res.end();
                });
            } else if (req.method === 'POST') {
                // printing
            } else if (req.method === 'PUT') {
                // printing
            } else if (req.method === 'DELETE') {
                // printing
            }
        }
    }
]