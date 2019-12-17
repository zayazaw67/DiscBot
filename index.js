require('dotenv').config();
const Discord = require('discord.js');
// const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();

setInterval(function () {
    app.get("https://polar-ridge-50259.herokuapp.com/");
    console.log("Preventing idle")
}, 10000); // every 5 minutes (300000)

client.once('ready', () => {
    console.log("Ready!")
});


client.on('message', (message) => {

    if (message.content !== '' /*&& user.name == "bumble" || "zaya"*/) {
        // message.react("💩");
        let emoji = message.guild.emojis.find(emoji => emoji.name === "KBT112");
        message.react(emoji);
    };
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

client.login();
