const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
	fullName 	  : {type : String},
	email    	  : {type : String},
	contactNumber : {type : Number},
	dialCode      : {type : String},
	profilePicture: {type : Array},
	is_deleted    : {type : Number, default : 0}
}, {
	timestamps : true
});

module.exports = mongoose.model("User", userSchema);