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
        var s_newMessage = new String();
        
        var lengh = message.content.length;
        
        for ( var i = 0; i < lengh; i++)
        {
            s_newMessage +=  s_message.charAt(lengh - i - 1);
        }
        
        message.delete();
        
        try{
            message.channel.send(`**${message.author.username}** ${s_newMessage}`);
        }
        catch(error){
            console.log(error);
        }
    }
})

bot.login(process.env.TOKEN);
