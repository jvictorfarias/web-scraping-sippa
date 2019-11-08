const cheerio = require('cheerio');
const request = require('request');

request('https://academico.quixada.ufc.br/sippa/', (err, response, html) => {
  if (!err && response.statusCode === 200) {
    const $ = cheerio.load(html);

    // const scraping = $('body');

    // console.log(scraping.html());
    // console.log(scraping.text());
    // const output = scraping.children('h3').text();
    // const output = scraping.parent('h3').text();

    // const output = scraping.find('form');

    $('input').each((index, data) => {
      const input = $(data).attr('name');
      console.log(input);
    });
  }
});
