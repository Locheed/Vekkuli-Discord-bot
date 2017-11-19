const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  scrape: function(offers) {
    const url = 'https://murobbs.muropaketti.com/threads/sinae-hyoedyt-siitae-mitae-jimms-tietaeae.760477/';
    axios.get(url)
      .then(function (response) {
        const $ = cheerio.load(response.data);

        // Scrape update day of the offers
        const messageDate = $('.messageContent span').eq(12);
        const messageDateContent = messageDate.text();
    
        // Scrape four offers from MuroBBS Jimm's thread
        const first = $('.messageContent span a').eq(0).attr('href');
        const firstText = $('.messageContent span a').eq(0).text();
        const second = $('.messageContent span a').eq(1).attr('href');
        const secondText = $('.messageContent span a').eq(1).text();
        const third = $('.messageContent span a').eq(2).attr('href');
        const thirdText = $('.messageContent span a').eq(2).text();
        const fourth = $('.messageContent span a').eq(3).attr('href');
        const fourthText = $('.messageContent span a').eq(3).text();
        
        // Check if scrape contents date has changed
        if (offers || offers[8] != messageDateContent) {
          offers.push(first, firstText, second, secondText, third, thirdText, fourth, fourthText, messageDateContent);
        } else {
          return offers;
        }
      })     
      .catch(function (error) {
        console.log(error);
    });
  }
};