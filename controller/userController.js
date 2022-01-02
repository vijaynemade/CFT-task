const userSchema = require("../model/userSchema");

exports.userInfo = async (req, res, next) => {
	try{
		if(req.file == ""){
		 return res.status(200).json({status:0, message:'Image Must not be Empty',data:{}})
		}
		let data = await userSchema.findOne({email : req.body.email})
		if(data) {
		 return res.status(200).json({status:0, message:'user already exist',data:{}})
		} else {
		let uData = {...req.body, images : req.file};
		let user  = await userSchema.create({
			fullName 	   : uData.fullName,
			email 	 	   : uData.email,
			contactNumber  : uData.contactNumber,
			dialCode 	   : uData.dialCode,
			profilePicture : uData.images
		})
		if(user){
		 return res.status(200).json({status:1, message:'user register successfully',data:user})
		} else{
		 return res.status(200).json({status:0, message:'try again',data:{}})
		}
		}
	}
	catch(error){
		console.log(error)
	}
};

exports.getDataById = async (req, res, next) => {
	try {
		
		let data = await userSchema.findOne({_id : req.body.userId, is_deleted : 0})
		if(data){
		 return res.status(200).json({status:1, message:'user find by Id',data:data});
		} else {
		 return res.status(200).json({status:0, message:'user not found',data:{}})
		}
	}
	catch(error){
		console.log(error)
	}
};

exports.updateData = async (req, res, next) => {
	try {
		profilePicture = req.file;

		if(profilePicture != ""){
		let data = await userSchema.findOneAndUpdate({_id:req.body.userId}, {
			fullName 	   : req.body.fullName,
			email 	 	   : req.body.email,
			contactNumber  : req.body.contactNumber,
			dialCode 	   : req.body.dialCode,
			profilePicture : profilePicture
		},{new : true});
		 return res.status(200).json({status:1, message:'user updated successfully',data:data})
		} else{
		let data = await userSchema.findOneAndUpdate({_id:req.body.userId}, {
			fullName 	   : req.body.fullName,
			email 	 	   : req.body.email,
			contactNumber  : req.body.contactNumber,
			dialCode 	   : req.body.dialCode
		},{new : true});
		 return res.status(200).json({status:1, message:'user updated successfully',data:data})
		}
		 return res.status(200).json({status:0, message:'user not found',data:{}})
	}
	catch(error){
		console.log(error)
	}
};

exports.getData = async (req, res, next) => {
	try {
		let data = await userSchema.find({is_deleted : 0});
		if(data != ""){
		 return res.status(200).json({status:1, message:'All data found',data:data})
		} else{
	    return res.status(200).json({status:0, message:'data not found',data:{}})
		}
	}
	catch(error){
		console.log(error)
	}
};

exports.deleteData = async(req, res, next) => {
	try{
		let data = await userSchema.findOneAndUpdate({_id:req.body.userId, is_deleted:0}, {is_deleted:1})
		if(data != ""){
		 return res.status(200).json({status:1, message:'data deletexd successfully',data:data})
		} else{
		 return res.status(200).json({status:0, message:'data not found',data:{}})
		}
	}
	catch(error){
		console.log(error)
	}
};