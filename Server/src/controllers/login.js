const users = require('../utils/users')

function login(req, res){
    const {email, password} = req.query;

    const valido = users.find(v => v.email === email && v.password === password)

    if(valido){
        res.status(200).json({'access': true})
    }else{
        res.status(200).json({'access': false})
    }

}


module.exports = login

// let emailValido;
// let passwordValido;

// for(let i = 0; i < array.length; i++){
//   if(array[i].email == email &&  array[i].password === password){
//         emailValido = email
//         passwordValido = password
//   }
// }