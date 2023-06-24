const { User } = require('../DB_connection')

async function login(req, res) {
    try {
        const { email, password } = req.query;
        if (!email || !password) {
            return res.status(400).send('Faltan datos')
        } else {
            const user = await User.findOne({
                where: { email: email }
            })
            if (!user) return res.status(404).send('Usuario no encontrado');
            if (user.password !== password) return res.status(403).send('Contraseña incorrecta');

            return res.json({
                access: true
            })
        }

    } catch (error) {
        res.status(500).json({error: error.message})
    }
}




// const users = require('../utils/users')

// function login(req, res){
//     const {email, password} = req.query;

//     const valido = users.find(v => v.email === email && v.password === password)

//     if(valido){
//         res.status(200).json({'access': true})
//     }else{
//         res.status(200).json({'access': false})
//     }

// }


module.exports = login

// let emailValido;
// let passwordValido;

// for(let i = 0; i < array.length; i++){
//   if(array[i].email == email &&  array[i].password === password){
//         emailValido = email
//         passwordValido = password
//   }
// }