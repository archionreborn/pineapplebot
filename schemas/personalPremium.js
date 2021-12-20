const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
	
	guildId: String,
	userId: String,

	
	isPremium: Boolean,
	PremiumStart: String,
	PremiumEnd: String,

	premiumCode: String
})

module.exports = mongoose.model('personalPremium', Schema)