const axios = require('axios');
const cheerio = require('cheerio');

module.exports = {
  scrape: function(offersCdon) {
    const url = 'http://cdon.fi/black_friday/';
    axios.get(url)
      .then(function (response) {
        const $ = cheerio.load(response.data);
        
        $('div.minors-2__wrapper').each(function( index ) {
          let title1 = $(this).find('div:nth-child(1) > .minors-2__text').text().trim();
          //var link1 = $(this).find('div:nth-child(1) > minors-2__text').attr('href');
          let price1 = $(this).find('div:nth-child(1) > .minors-2__price-wrapper').text();
          //let img1 = $(this).find('div:nth-child(1) > img').attr('data-src');
  
          let title2 = $(this).find('div:nth-child(2) > .minors-2__text').text().trim();
          //let link2 = $(this).find('div:nth-child(2) > minors-2__text').attr('href');
          let price2 = $(this).find('div:nth-child(2) > .minors-2__price-wrapper').text();
          //let img2 = $(this).find('div:nth-child(2) > img').attr('data-src');

          let title3 = $(this).find('div:nth-child(3) > .minors-2__text').text().trim();
          //let link3 = $(this).find('div:nth-child(3) > minors-2__text').attr('href');
          let price3 = $(this).find('div:nth-child(3) > .minors-2__price-wrapper').text();
          //let img3 = $(this).find('div:nth-child(3) > img').attr('data-src');
          
          let title4 = $(this).find('div:nth-child(4) > .minors-2__text').text().trim();
          //let link4 = $(this).find('div:nth-child(4) > minors-2__text').attr('href');
          let price4 = $(this).find('div:nth-child(4) > .minors-2__price-wrapper').text();
          //let img4 = $(this).find('div:nth-child(4) > img').attr('data-src');

          let firstOffer = title1 + ' ' + price1;
          let secondOffer = title2 + ' ' + price2;
          let thirdOffer = title3 + ' ' + price3;
          let fourthOffer = title4 + ' ' + price4;
          offersCdon.push(firstOffer, secondOffer, thirdOffer, fourthOffer);
        });
      })     
      .catch(function (error) {
        console.log(error);
    });
  }
};