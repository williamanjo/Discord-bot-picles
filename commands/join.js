const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
	// Join the same voice channel of the author of the message
	if (message.member.voice.channel) {
		const connection = await message.member.voice.channel.join();
	}
};