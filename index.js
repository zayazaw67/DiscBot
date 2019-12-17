require('dotenv').config(); 
const Discord = require('discord.js');
// const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});


client.on('message', (message) => {

    if (message.content !== '' /*&& user.name == "bumble" || "zaya"*/) {
        // message.react("💩");
        let emoji = message.guild.emojis.find(emoji => emoji.name ==="KBT112");
        message.react(emoji);
    };
});

server.listen(process.env.PORT || 5000)

client.login();
