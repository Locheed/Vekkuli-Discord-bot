// const axios = require('axios');
// const cheerio = require('cheerio');

// module.exports = {
//   scrape: function(offersVerkkokauppa) {
//     const url = 'https://www.verkkokauppa.com/fi/catalog/1436b/Ruoanvalmistusvalineet/products/1?sort=popularity';
//     axios.get(url)
//       .then(function (response) {
//         const $ = cheerio.load(response.data);

//         // Scrape update day of the offers
//         // const messageDate = $('.messageContent span').eq(12);
//         // const messageDateContent = messageDate.text();
    
//         // Scrape four offers from MuroBBS Jimm's thread
//         const itemsOnPage = $('.product-list-detailed__item').length;
//         console.log(itemsOnPage);
//         // $('.product-list-detailed__item span').each(function(i, elm) {
//         //   console.log($(this).text()); // for testing do text() 
//         // });
//         //const items = $('.product-list-detailed__item .product-price__price');
//         //console.log(items.text());
        
//         $('div.list-product').each(function( index ) {
//           var title = $(this).find('span.list-product-link__name').text().trim();
//           var link = $(this).find('a.data__list-product-link').attr('href');
//           let price = $(this).find('span.product-price__price').text();
//           let originalPrice = $(this).find('span.product-price__price.product-price__price--original').text();
//           // console.log('title: ' + title);
//           // console.log('url: ' + link);
//           // console.log('price: ' + price);
//           console.log('originalPrice: ' + originalPrice);
//         });
        
//         //console.log(fruits);
//         //console.log($('span').filter('.product-price__price--original').attr('class'));
//         // Check if scrape contents date has changed
//         // if (offersVerkkokauppa) {
//         //   offersVerkkokauppa.push(first, firstText, second, secondText, third, thirdText, fourth, fourthText);
//         // } else {
//         //   return offersVerkkokauppa;
//         // }
//       })     
//       .catch(function (error) {
//         console.log(error);
//     });
//   }
// };