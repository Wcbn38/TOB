//recuperer l'ID role discord == \@rolename

const Discord = require('discord.js');
const bot = new Discord.Client();

const adminChannel = process.env.adminChannel

var http = require("http");
setInterval(function () {
    http.get("http://wcbn-s-bot.herokuapp.com/");
}, 900000)

bot.on("ready", channels => {
    console.log(bot.channels);
    bot.channels.cache.each( channel => {
        if( channel.type == 'text')
        {
            channel.send(`tob t'écarte le fion.`);
        }
    })
})

bot.on("message", message => {

})

bot.on("channelCreate", channel => {

})


bot.login(process.env.TOKEN);
