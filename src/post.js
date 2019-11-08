require('dotenv/config');
const request = require('request-promise').defaults({ jar: true });
const tough = require('tough-cookie');
// const cheerio = require('cheerio');

const fs = require('fs');

const writeStream = fs.createWriteStream('sippa.html');

/*
const cookie = new tough.Cookie({
  key: 'JSESSIONID',
  value: 'B7ABD42CF869BB69374B96ABEDFF3D1A',
  domain: 'academico.quixada.ufc.br',
  httpOnly: true,
});

const cookieJar = request.jar();
cookieJar.setCookie(JSON.stringify(cookie), 'https://academico.quixada.ufc.br');
*/
request({
  method: 'GET',
  uri: 'https://academico.quixada.ufc.br/sippa/index.jsp',
})
  .then(response => {
    request({
      method: 'POST',
      uri: 'https://academico.quixada.ufc.br/ServletCentral',
      followAllRedirects: true,
      form: {
        login: '',
        senha: '',
        conta: 'aluno',
        captcha: '3iia',
        comando: 'CmdLogin',
        enviar: 'Entrar',
      },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US; rv:1.8.1.6) Gecko/20070725 Firefox/2.0.0.6',
      },
    })
      .then(html => {
        writeStream.write(html);
      })
      .catch(err => {
        console.log(err);
      });
  })
  .catch(err => {
    console.log(err);
  });
