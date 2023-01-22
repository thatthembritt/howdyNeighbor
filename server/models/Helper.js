const { Schema, model } = require("mongoose");

const helperSchema = new Schema({
	first_name: {
		type: String,
		required: true,
		trim: true,
	},
	last_name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	yardHelp: {
		type: Boolean,
	},
	houseHelp: {
		type: Boolean,
	},
	techHelp: {
		type: Boolean,
	},
	autoHelp: {
		type: Boolean,
	},
	petHelp: {
		type: Boolean,
	},
});

const Helper = model("Helper", helperSchema);

module.exports = Helper;
