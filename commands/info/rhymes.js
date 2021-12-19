var rhymes = require('rhymes')
const Discord = require('discord.js')


module.exports = {
	name: "rhyme",
	description: 'Rhymes the word you input.',
	usage: '[word]',
	cooldown: 5,

	//permissions: 'SEND_MESSAGES',
	//guildOnly: true,

	/**
	 * @description Executes when the command is called by command handler.
	 * @author Naman Vrati
	 * @param {Object} message The Message Object of the command.
	 * @param {String[]} args The Message Content of the received message seperated by spaces (' ') in an array, this excludes prefix and command/alias itself.
	 */

	execute(message, args) {
		
		let array = rhymes(args.slice(0).join(' '));

		const embed = new Discord.MessageEmbed()

		embed.setColor(`0x4286f4`)
		embed.setTitle(`<a:tc_Snowflake:917981909139726377> Rhymes for ${args[0]}`)
		embed.setDescription("This is the rhymes for the word you have inputted. The results are listed or sorted by points, the higher the points, the more nearer is the rhyme with the inputted word. A pronounciation of the word is also included.")
		array.map(obj => { 
			
			let str = obj.word;
			const str2 = str.charAt(0).toUpperCase() + str.slice(1);

			embed.addField(`${str2}`, `Points: **\`${obj.score}\`**\nPron: **\`${obj.pron}\`**`, true) 
			
				 })
		if(embed.fields.length === 0) { embed.addField(`Error`, `No results found for this word.`, true)}
		message.channel.send({ embeds: [embed] })

	},
};
