const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
	
	guildId: String,
	userPremium: String,
	
	isPremium: Boolean,
	PremiumStart: String,
	PremiumEnd: String,

	premiumCode: String
})

module.exports = mongoose.model('guildPremium', Schema)