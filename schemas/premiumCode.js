const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
	
	dateCreated: String,
	premiumCode: String,
	createdBy: String,

	codeAvailable: Boolean,
	premiumDuration: String,
	premiumEnds: String,
	premiumType: String

})

module.exports = mongoose.model('premiumCode', Schema)