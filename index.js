require('dotenv').config();
const Discord = require('discord.js');
// const { token } = require('./config.json');
const client = new Discord.Client();
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const http = require("http");

setInterval(function () {
    http.get("http://polar-ridge-50259.herokuapp.com");
}, 300000); // every 5 minutes (300000)

client.once('ready', () => {
    console.log("Ready!")
});

client.on('message', (message) => {
    if (message.content !== '' || message.attachments.size > 0) {
        let emoji = message.guild.emojis.find(emoji => emoji.name === "KBT112");
        message.react(emoji);
    };
    if (message.author.id == "538084283387084801") {            // autorespond cat to ali
        let catEyesOne = message.guild.emojis.find(emoji => emoji.name === "emoji_7");
        message.react(catEyesOne);
    }
    if (message.author.id =="130637781591523328") {             // autorespond poop to necro
        message.react("💩");
    }
});

app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});

client.login();
