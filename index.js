const Discord = require('discord.js');
const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});


client.on('message', (message) => {

    if (message.content !== '' && user.name == "bumble" || "zaya") {
        message.react("💩");
    };
});

client.login(token);
