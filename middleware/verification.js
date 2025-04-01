const verify_token = async(req, res, next) => {
    let token = req.header('Authorization')
    if(token){
    
        try{

        let payload = jwt.verify(token,process.env.JWT_SECRET)
        let user = await User.findById(payload.id)
        req.user = user
        next()
        }
    
    catch{
        res.send('Invalid token Access')
        }
    }
    else{
        res.send('No access')
        }
    }

    module.exports = verify_token
    
    
    
    
    
    
    