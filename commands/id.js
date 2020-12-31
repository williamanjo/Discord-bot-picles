  
const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const pessoa = args.join(' ');
  message.channel.send("ID ("+ message.mentions.users.first().username +"): " + message.mentions.users.first().id)
};
