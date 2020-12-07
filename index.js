//recuperer l'ID role discord == \@rolename

const Discord = require('discord.js');
const bot = new Discord.Client();

const adminChannel = process.env.adminChannel;

var http = require("http");
setInterval(function () {
    http.get("http://wcbn-s-bot.herokuapp.com/");
}, 900000)

bot.on("ready", channels => {
    console.log(`bot started`);
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
        var s_message = message.content;
        var s_newMessage = s_message;
        var lengh = 0;
        
        lengh = s_message.lengh;
        lengh--;
        console.log(lengh);
        for ( var i = 0; i < lengh; i++)
        {
            s_newMessage[i] = s_message[lengh - i - 1];
            console.log(s_message[lengh - i - 1]);
        }
        message.edit(s_newMessage);
        console.log(s_message);
        console.log(s_newMessage);
    }
})

bot.login(process.env.TOKEN);
