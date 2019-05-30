const Discord = require("discord.js");

var PREFIX = "!";

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("Sinqs_BOT, !help");
    console.log("Le bot a bien ete conecte");
});

bot.on("message", async function(message) {
    if (message.author.equals(bot.user)) return;

    if(!message.content.startsWish(PREFIX)) return; 

    var args = message.content.substring(PREFIX. length).split(" ");

    switch(args(0).toLowerCase()) {
        case "invite":
            message.channel.send("", {
                embed: {
                    color: 0xFF0000,
                    author: message.author.name,
                    title: '',
                    field: [{
                        name: " Lien d'invitation discord",
                        value: "https://discord.gg/zhcbkc",
                        inline: false
                    }],
                    footer: {
                        footer: "Partager ce lien à tous vos amis !";
                },
            }  
            });    
            break;
    }    
});       

bot.login("NTgxNTE2MDYwODUxODMwODAx.XO9EXg.U7BfZb2bM28HFuDyaJfdXrXNRjY");
