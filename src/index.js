const Discord = require('discord.js');
const schedule = require('node-schedule');

const config = require('../config.json');


const muroScraper = require('./Scraper/muro_scraper');
const cdonScraper = require('./Scraper/cdon_scraper');

const jimmsEmbeds = require('./Embeds/jimms_embed');
const cdonEmbeds = require('./Embeds/cdon_embed');

const client = new Discord.Client();

const prefix = '!';



client.on('ready', () => {
  console.log('I am ready!');
});



client.on('guildMemberAdd', (member) => {
  const logChannel = member.guild.channels.find('name', 'logit');
  if (logChannel) {
    logChannel.send(`${member.user.tag} (${member.id}) liittyi juuri ${member.guild.name}`);
  }
});

client.on('guildMemberRemove', (member) => {
  const logChannel = member.guild.channels.find('name', 'logit');
  if (logChannel) {
    logChannel.send(`${member.user.tag} (${member.id}) poistui juuri`);
  }
});

let offers = [];
let offersCdon = [];
muroScraper.scrape(offers);
cdonScraper.scrape(offersCdon);

// Scheduling scraping from MuroBBS Jimm's thread
let scheduledJimmsScrape = schedule.scheduleJob({
  minute: 10,
  hour: 16,
  dayOfWeek: 2
}, function() {
  muroScraper.scrape(offers);
  console.log('scraping new data tuesday 16:10!');
  jimmsEmbeds.embed(client, offers);
});

// Scheduling scraping from CDON.fi Black Friday deals
let scheduledCdonScrape = schedule.scheduleJob({
  second: 5,
  minute: 0,
  date: 19,
  month: 10
}, function() {
  cdonScraper.scrape(offersCdon);
  console.log('scraping new black fridays from cdon!');
  cdonEmbeds.embed(client, offersCdon);
});


// Messages handler
client.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  if (message.content.startsWith(prefix + 'jimms')) {
    jimmsEmbeds.embed(client, offers);
  } else

  if (message.content.startsWith(prefix + 'cdon')) {
    cdonEmbeds.embed(client, offersCdon);
  } else

  if (message.content.startsWith(prefix + 'members')) {
    const tags = client.users.map(u=> u.username).join(', ');
    console.log(tags);
    message.guild.channels.find("name", "bot-dev").send(tags);

  }
});

client.login(config.token);