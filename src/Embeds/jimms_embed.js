const {tarjoukset} = require('../Constants/Constants');

module.exports = {
  embed: function(client, offers) {
    client.channels.get(tarjoukset).send({embed: {
      color: 3447003,
      author: {
        name: "Jimm's",
        icon_url: "https://images.jimms.fi/jimms/logo_trans.png"
      },
      title: "Jimmssin MuroBBS tarjoukset",
      url: "http://www.jimms.fi",
      description: "Viikkotarjous, päivitetty " + offers[8],
      fields: [{
        name: offers[0],
        value: offers[1]
      },
      {
        name: offers[2],
        value: offers[3]
      },
      {
        name: offers[4],
        value: offers[5]
      },
      {
        name: offers[6],
        value: offers[7]
      }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Jimms.fi"
      }
    }
    });
  } 
};