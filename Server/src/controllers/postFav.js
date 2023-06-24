const { Favorite } = require('../DB_connection')

async function postFav(req, res){
    try {
        const {id, name, origin, status, image, species, gender} = req.body;
    
        if(!id || !name || !origin || !status || !image || !species || !gender){
            return res.status(401).send('Faltan datos')
        }
        await Favorite.findOrCreate({
            where:{id, name, origin, status, image, species, gender}
        })
        const allUser = await Favorite.findAll()
        return res.status(200).json(allUser)
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = postFav
