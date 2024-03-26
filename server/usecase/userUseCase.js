const User = require('../models/userModel')

class UserUseCase{
	async signUser(name, password){
		try{
			const newUser = new User({name, password})
			const savedUser = await newUser.save()
			return savedUser
		}
		catch(error){
			throw new Error(`usecase error in sign up${error}`)
		}
	}
}

module.exports = new UserUseCase