let myFavorites = [];

function postFav(req, res){
    const character = req.body
    myFavorites.push(character)

    res.json(myFavorites)
}

function deleteFav(req, res){
    const id = req.params.id;

    const filtro = myFavorites.filter(fav => fav.id !== id)
    myFavorites = filtro
    res.json(myFavorites)
}

module.exports = {
    postFav,
    deleteFav
}
