const jwt = require('jsonwebtoken')

module.exports =  isAuth = (req, res, next) => {
    // getting token and checking if it is present
    const token = req.get('Authorization').split(' ')[1]
    // verifciation of token 
    let decodeToken
    try {
        decodeToken = jwt.verify(token, 'thisismysecret')        
    } catch (error) {
        res.status(500).json({
            error : error
        })        
    }
    if(!decodeToken) { 
        res.status(401).json({
            error : 'Not Authenticated'
        })
    }
    req.id = decodeToken.id
    console.log(req.id)
    next()
}