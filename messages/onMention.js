/**
 * @file Default Bot Mention Command
 * @author Naman Vrati
 * @since 3.0.0
 */

const { prefix } = require("../config.json");

module.exports = {
	/**
	 * @description Executes when the bot is pinged.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 */

	async execute(message) {
		return message.reply(
			`Heya ${message.member.displayName}, looking for my prefix in this server? It's \`${prefix}\`. You can also just ping me and the command instead of the prefix!`
		);
	},
};
