const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function () {
    bot.user.setGame("Sinqs_BOT, !help");
    console.log("Le bot a bien ete conecte");
});

bot.login("NTgxNTE2MDYwODUxODMwODAx.XO9EXg.U7BfZb2bM28HFuDyaJfdXrXNRjY");
