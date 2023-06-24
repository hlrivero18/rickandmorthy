const { Favorite } = require('../DB_connection');

async function deleteFav( req, res ){
    try {
        const {id} = req.params;
        await Favorite.destroy({
            where:{
                id: id
            }
        })
        const allFavorite = await Favorite.findAll();
        res.json(allFavorite); 
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
module.exports = deleteFav