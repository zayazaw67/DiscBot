const nr = require('newrelic');
require('dotenv').config();
const Discord = require('discord.js');
// const { token } = require('./config.json');
const user = require('./users.json');
const client = new Discord.Client();
const express = require("express");
const PORT = process.env.PORT || 8080;
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'app/public')));
app.use(express.urlencoded({ extended: true }));

require('./app/routing/htmlroutes.js')(app);

setInterval(function () {
    app.get("/", function (req, res) {
        res.send("Preventing idle")
        console.log("Preventing idle")
    });
    // console.log("Preventing idle")
}, 5000); // every 5 minutes (300000)

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
