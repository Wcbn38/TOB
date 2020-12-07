//recuperer l'ID role discord == \@rolename

const Discord = require('discord.js');
const bot = new Discord.Client();

const adminChannel = process.env.adminChannel

var http = require("http");
setInterval(function () {
    http.get("http://wcbn-s-bot.herokuapp.com/");
}, 900000)

bot.on("ready", channels => {
  console.log(channels)
  bot.channels.get(adminChannel).send(`Bot started.`)
})

bot.on("message", message => {

})

bot.on("channelCreate", channel => {

})


bot.login(process.env.TOKEN);
