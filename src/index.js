/* eslint-disable no-console */
const cheerio = require('cheerio');
const request = require('request');

request('https://si3.ufc.br/sigaa/verTelaLogin.do', (err, response, html) => {
  if (!err && response.statusCode === 200) {
    console.log(html);
  }
});
