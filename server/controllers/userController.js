const UserUseCase = require('../usecase/userUseCase')
const session = require('express-session')

class UserController{
	async userSignup(req, res){
		try{
			
		}
		catch(() => {
			res.status(400).send(`Controller errror in signup ${error}`)
		})
	}	
}

module.exports = new UserController