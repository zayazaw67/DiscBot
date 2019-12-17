const Discord = require('discord.js');
const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log("Ready!")
});

client.on('message', (message) => {

    if (message.content !== '' && user.id == "102471143180500992") {
        message.react("💩");
    };
});

client.login(token);
