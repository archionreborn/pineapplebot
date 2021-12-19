var rhymes = require('rhymes')
const Discord = require('discord.js')


module.exports = {
	name: "automod",
	description: 'Enable or Disable the Auto-Moderation in the server.',
	usage: '',
	cooldown: 5,
	aliases: ["setautomod", "automoderation"],
	permissions: 'ADMINISTRATOR',
	//guildOnly: true,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		
		message.reply('This command is currently work in progress, you may retry to use the command later.')

	},
};
