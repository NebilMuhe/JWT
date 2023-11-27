

const login = async(req,res)=>{
    res.send("You are logged in")
}


const dashboard = async(req,res)=>{
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:"Hello Nebil",value:`Your lucky number ${luckyNumber}`})
}


module.exports = {
    login,dashboard
}