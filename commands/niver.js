const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  const pessoa = args.join(' ');
  if (message.mentions.users.first().id == 346059379843530752){message.channel.send("O aniversário de "+ message.mentions.users.first().username +" é 30/06/1998 !");}
  else if (message.mentions.users.first().id  == 273583376672489472){message.channel.send("O aniversário de "+ message.mentions.users.first().username +" é 11/02/99 !");}
  else if (message.mentions.users.first().id == "bellz"){message.channel.send("O aniversário de "+ message.mentions.users.first().username +" é 13/12/1997 !");}
  else if (pessoa.toLowerCase() == "júlio"){message.channel.send("O aniversário de "+ message.mentions.users.first().username +" é  22/08/2006 !");}
  else if (message.mentions.users.first().id == 201013211493957632){message.channel.send("O aniversário de "+ message.mentions.users.first().username +" é  27/02/2002 !");}
  else { message.channel.send("Que pena não esta cadastrado esse usuario , Mande ao Administrador o  ID ("+ message.mentions.users.first().username +"): " + message.mentions.users.first().id+").")}
  
};
