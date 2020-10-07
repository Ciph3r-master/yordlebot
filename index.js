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
  client.user.setPresence({ activity: {name: 'Bot fait avec ❤️ par Bill Cipher.#2423'}, status: 'online' })
  .then(console.log)
  .catch(console.error);

});

// HUG
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+hug") return;
  if (split.length !== 2 && split[0] == "+hug") {
    helpMessage("+hug",message.channel,"qui mérite d'être caliné :heart:")
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime hug","anime alone","reçoit un calin de","essaye de se faire un calin",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//R34
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+r34") return;
  if (split.length !== 2 && split[0] == "+r34") {
    helpMessage("+r34",message.channel,"la personne / objet / tout ce que tu veux qui te fait de l'effet")
    return;
  } 
  
  console.log("Send R34 BITCH"+split[1])
  getR34(message.channel,split[1])


});

//SLAP
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+slap") return;
  if (split.length !== 2 && split[0] == "+slap") {
    helpMessage("+slap",message.channel,"la personne que tu veux gifler")
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime slap","anime sad","se prend une mandale de","essaye de se cogner",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//HATE
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+hate") return;
  if (split.length !== 2 && split[0] == "+hate","la personne que tu veux gronder") {
    helpMessage("+hate",message.channel)
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime mad","anime stupid","se fait engueuler par","veut s'insulter AIDEZ LE",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//KISS
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+kiss") return;
  if (split.length !== 2 && split[0] == "+kiss") {
    helpMessage("+kiss",message.channel,"la personne que tu aimes")
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime kiss","anime alone","reçoit un bisou de","veut un bisou",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//PAT
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+pat") return;
  if (split.length !== 2 && split[0] == "+pat") {
    helpMessage("+pat",message.channel,"la personne que tu veux caliner")
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime pat","anime shocked","reçoit des papouilles de","se caresse ( ͡ಠ ʖ̯ ͡ಠ)",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//FIGHT
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+fight") return;
  if (split.length !== 2 && split[0] == "+fight") {
    helpMessage("+fight",message.channel,"la personne que tu veux fracasser")
  } else if(message.mentions.members.first() !== 'undefined') {
    gifMessage("anime fight","anime crazy","se combat contre","se frappe tout seul AIDEZ LE",message.channel,message.mentions.members.first(), message.author.id,false)
  }

});

//DANCE
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+dance") return;

  gifMessage("anime dance","anime dance","danse, FAITES DU BRUIT !","",message.channel,message.mentions.members.first(), message.author.id,true)
  

});

//SLEEP
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+sleep") return;

  gifMessage("anime sleep","anime sleep","par dormir, bonne nuit petit ange 🌙","",message.channel,message.mentions.members.first(), message.author.id,true)
  

});

//BANANA
client.on('message', message => {
  var content = message.content;
  var split = content.split(" ");
  if(split[0] !== "+banana") return;

  gifMessage("banana","banana","veut une banane 🍌","",message.channel,message.mentions.members.first(), message.author.id,true)
  

});

/*async function hugMessage(channel,receiverid, giverid) {

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

}*/

function getR34(channel,tags){

  var https = require('https');
  var xml2js = require('xml2js');
  var parser = new xml2js.Parser();
  var split = tags.split(" ")
  var tag = split[0]
  console.log(tag)

  parser.on('error', function(err) { console.log('Parser error', err); });
 
  var data = '';
  https.get("https://rule34.xxx/index.php?page=dapi&s=post&q=index&tags="+tag+"&limit=100", function(res) {
      if (res.statusCode >= 200 && res.statusCode < 400) {
        res.on('data', function(data_) { data += data_.toString(); });
        res.on('end', function() {
          console.log('data', data);
          parser.parseString(data, function(err, result) {
            console.log('FINISHED', err, result);

            

            let count = result['posts']['$']['count']
            console.log(count)
            
            if(count == 0){
              channel.send("Aucune image trouvée, lisez la règle 35 d'internet.")
              return;
            } else if(count > 100) {
              count = 100
            } else {
              count = result['posts']['$']['count']
            }

            channel.send(result['posts']['post'][getRandomInt(0,count)]['$']['file_url'])


            console.log(result['posts']['post'][getRandomInt(0,count)]['$']['file_url'])

            
          });
        });
      }
    });

    
}

async function gifMessage(tags,alonetags,message,alonemessage,channel,receiverid, giverid, isSolo) {

  let gifURL = "https://d3rrv21q7fx9b0.cloudfront.net/m/1824f8c5136ddead/LA02_768x400-LA02_46_abbaye-de-citeaux_6.jpg";

  const embed = new Discord.MessageEmbed()  
  .setColor(0x00AE86)
  .setTimestamp()

  if(isSolo) {

    await Tenor.Search.Random(tags, "1").then(Results => {
      Results.forEach(Post => {
            console.log(`Item #${Post.id} (Created: ${Post.preview}) @ ${Post.url} ${Post}`);
            gifURL = Post.url;
      });
    }).catch(console.error);

    embed.setDescription("<@" + giverid + "> "+ message)

    channel.send({embed})
    channel.send(gifURL)
    return;
  }

  if(receiverid != giverid){

    await Tenor.Search.Random(tags, "1").then(Results => {
      Results.forEach(Post => {
            console.log(`Item #${Post.id} (Created: ${Post.preview}) @ ${Post.url} ${Post}`);
            gifURL = Post.url;
      });
    }).catch(console.error);

 
      embed.setDescription("<@" + receiverid + "> "+ message +" <@"+ giverid+ ">")
    

    

  } else {

    await Tenor.Search.Random(alonetags, "1").then(Results => {
      Results.forEach(Post => {
            console.log(`Item #${Post.id} (Created: ${Post.preview}) @ ${Post.url} ${Post}`);
            gifURL = Post.url;
      });
    }).catch(console.error);

    console.log("seul")

    embed.setDescription("<@" + receiverid + "> "+alonemessage)
    
  }

  console.log(receiverid+"\n"+giverid)

  channel.send({embed})
  channel.send(gifURL)

}

/*async function hateMessage(channel,receiverid, giverid) {

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

}*/

function helpMessage(command,channel,helpmessage){
  const embed = new Discord.MessageEmbed()
  .setTitle("Aide :")
  .setDescription("Syntaxe : "+command+" **@LaPersonne** "+helpmessage)
  .setColor(0x00AE86)
  .setTimestamp()
  channel.send({embed})
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  console.log(Math.floor(Math.random() * (max - min + 1)) + min)
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Log our bot in using the token from https://discord.com/developers/applications
client.login(process.env.TOKEN);

