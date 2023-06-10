const axios = require('axios');
const URL = 'https://rickandmortyapi.com/api/character/';

function getCharById(req, res) {
    const id = req.params.id

    axios.get(URL + id).then((response) => {
        const { name, gender, species, origin, image, status } = response.data
        const character = { id, name, gender, species, origin, image, status }
        if (character.name) {
            res.json(character)
        }
        else {
            res.status(404).send('Not fount')
        }
    }).catch((error) => {
        res.status(500).send(error.message)
    })
}

module.exports = getCharById







// const axios = require('axios')

// function getCharById(res, id){
//     axios.get(`https://rickandmortyapi.com/api/character/${id}`)
//     .then((response) => {
//         const {name, gender, species, origin, image, status} = response.data
//         const character = {
//             id: id,
//             name: name,
//             gender: gender,
//             species: species,
//             origin: origin,
//             image: image,
//             status: status
//         }
//         res.writeHead(200, {'Content-Type': 'application/json'})
//         res.end(JSON.stringify(character))
//     }).catch((error) => {
//         res.writeHead(500, {'Content-Type': 'text/plain'})
//         res.end(error.message)
//     })
// }

// module.exports = getCharById
