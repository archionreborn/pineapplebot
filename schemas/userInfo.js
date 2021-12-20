const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
	
	userId: String,
	isPremium: Boolean,
	PremiumType: String,

	isDeveloper: Boolean
})

module.exports = mongoose.model('users', Schema)