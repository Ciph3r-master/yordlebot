// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();


const Tenor = require("tenorjs").client({
  "Key": "DYAPE13ACYGS", // https://tenor.com/developer/keyregistration
  "Filter": "off", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
  "MediaFilter": "minimal", // either minimal or basic, not case sensitive
  "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});


client.on('ready', () => {
  console.log('I am ready!');
  client.user.setPresence({ activity: {name: 'Bot instable, ne pas approcher sous peine de mort'}, status: 'online' })
  .then(console.log)
  .catch(console.error);
});

// Create an event listener for messages
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+hug") return;
  if (split.length !== 2 && split[0] == "+hug") {
    hugHelpMessage(message.channel)
  } else if(message.mentions.members.first() !== 'undefined') {
    hugMessage(message.channel,message.mentions.members.first(), message.author.id)
  }

});

client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+hate") return;
  if (split.length !== 2 && split[0] == "+hate") {
    hateHelpMessage(message.channel)
  } else if(message.mentions.members.first() !== 'undefined') {
    hateMessage(message.channel,message.mentions.members.first(), message.author.id)
  }

});

async function hugMessage(channel,receiverid, giverid) {

  let gifURL = "https://d3rrv21q7fx9b0.cloudfront.net/m/1824f8c5136ddead/LA02_768x400-LA02_46_abbaye-de-citeaux_6.jpg";

  await Tenor.Search.Random("anime hug", "1").then(Results => {
    Results.forEach(Post => {
          console.log(`Item #${Post.id} (Created: ${Post.preview}) @ ${Post.url} ${Post}`);
          gifURL = Post.url;
    });
  }).catch(console.error);
  
  const embed = new Discord.MessageEmbed()
  .setDescription("<@" + receiverid + "> reçoit un calin de <@" + giverid+ ">")
  .setColor(0x00AE86)
  .setTimestamp()
  channel.send({embed})

  channel.send(gifURL)

}

async function hateMessage(channel,receiverid, giverid) {

  let gifURL = "https://d3rrv21q7fx9b0.cloudfront.net/m/1824f8c5136ddead/LA02_768x400-LA02_46_abbaye-de-citeaux_6.jpg";

  await Tenor.Search.Random("anime mad", "1").then(Results => {
    Results.forEach(Post => {
          console.log(`Item #${Post.id} (Created: ${Post.preview}) @ ${Post.url} ${Post}`);
          gifURL = Post.url;
    });
  }).catch(console.error);
  
  const embed = new Discord.MessageEmbed()
  .setDescription("<@" + receiverid + "> se fait engueuler par <@" + giverid+ ">")
  .setColor(0x00AE86)
  .setTimestamp()
  channel.send({embed})

  channel.send(gifURL)

}

function hugHelpMessage(channel){
  const embed = new Discord.MessageEmbed()
  .setTitle("Aide :")
  .setDescription("Syntaxe : +hug **@LaPersonne** qui mérite d'être caliné ❤️")
  .setColor(0x00AE86)
  .setTimestamp()
  channel.send({embed})
}

function hateHelpMessage(channel){
  const embed = new Discord.MessageEmbed()
  .setTitle("Aide :")
  .setDescription("Syntaxe : +hate **@LaPersonne** qui mérite de prendre tarif")
  .setColor(0x00AE86)
  .setTimestamp()
  channel.send({embed})
}

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);
