export function addFavorite (id){
    let favorites = JSON.parse(localStorage.getItem("favorites"))
    if(!favorites){
        favorites= []
    }
    favorites.push(id)
    localStorage.setItem("favorites",JSON.stringify(favorites))
}
export function removeFavorite (id){
    const favorites = JSON.parse(localStorage.getItem("favorites"))
    let newFavorites = favorites.filter((favorite)=>{
        return favorite !== id
    })
    localStorage.setItem("favorites",JSON.stringify(newFavorites))
}