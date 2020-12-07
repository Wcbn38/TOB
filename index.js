//recuperer l'ID role discord == \@rolename

const Discord = require('discord.js');
const bot = new Discord.Client();

const adminChannel = process.env.adminChannel;

var http = require("http");
setInterval(function () {
    http.get("http://wcbn-s-bot.herokuapp.com/");
}, 900000)

bot.on("ready", channels => {
    bot.channels.cache.each( channel => {
        if( channel.type == 'text')
        {
            channel.send(`tob t'écarte le fion.`);
        }
    })
})

bot.on("message", message => {
    if ( message.member.id !== bot.user.id )
    {
        var s_message = new String();
        var s_newMessage = new String();
        var lengh = 0;
        s_message = message.content;
        lengh = s_message.lengh;
        lengh--;
        for ( let i = 0; i < lengh; i++)
        {
            s_newMessage[i] = s_message[lengh - i - 1];
        }
        message.edit(s_newMessage);
        console.log(s_message);
        console.log(s_newMessage);
    }
})

bot.login(process.env.TOKEN);
