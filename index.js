const Discord = require('discord.js');
const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

// 656573848895881247 ali cat butt id
// 656574546945507369 test cat butt id


client.on('message', (message) => {

    if (message.content !== '' /*&& user.name == "bumble" || "zaya"*/) {
        // message.react("💩");
        let emoji = message.guild.emojis.find(emoji => emoji.name ==="KBT112");
        message.react(emoji);
    };
});

client.login(token);
