const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const pessoa = args.join(' ');
  if (pessoa.toLowerCase() == "picolas"){message.channel.send("O aniversário de Picolas é 30/06/1998 !");}
  else if (pessoa.toLowerCase() == "niko"){message.channel.send("O aniversário de Niko é 11/02/99 !");}
  else if (pessoa.toLowerCase() == "bellz"){message.channel.send("O aniversário de Bellz é 13/12/1997 !");}
  else if (pessoa.toLowerCase() == "júlio"){message.channel.send("O aniversário de Júlio é  22/08/2006 !");}
  else if (pessoa.toLowerCase() == "blaiizer"){message.channel.send("O aniversário de Blaiizer é  27/02/2002 !");}
  else { message.channel.send("ID: " + message.mentions.users.first().id)}
  
};
