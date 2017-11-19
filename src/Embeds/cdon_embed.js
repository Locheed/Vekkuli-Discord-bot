const {tarjoukset} = require('../Constants/Constants');

module.exports = {
  embed: function(client, offersCdon) {
    client.channels.get(tarjoukset).send({embed: {
      color: 3447003,
      author: {
        name: "CDON.fi",
        icon_url: "http://dizw242ufxqut.cloudfront.net/images/content/171012-bf17-gen-240x-tj.jpg"
      },
      title: "CDON.fi Black Friday 2017",
      url: "http://cdon.fi/black_friday/",
      description: "Kaikkien ostosjuhlien äiti on vihdoin täällä!",
      fields: [{
        name: offersCdon[0],
        value: offersCdon[0]
      },
      {
        name: offersCdon[1],
        value: offersCdon[1]
      },
      {
        name: offersCdon[2],
        value: offersCdon[2]
      },
      {
        name: offersCdon[3],
        value: offersCdon[3]
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "cdon.fi"
      }
    }
    }); 
  } 
};