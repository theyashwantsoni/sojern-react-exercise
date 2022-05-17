const KEY = "favouriteDogs";

export function setFavourite(obj) {
    if(getFavourites()){
        let favs = getFavourites()
        if(!favs.includes(obj.key)){
            favs = JSON.parse(favs);
            localStorage.setItem(KEY, JSON.stringify([...favs, obj]));
        }
    }else{
        localStorage.setItem(KEY, JSON.stringify([obj]));
    }
}

export function getFavourites(key = KEY) {
    return localStorage.getItem(key);
}

export function deleteFavourite(key){
    if(getFavourites()){
        let favs = getFavourites()
        let filtered = JSON.parse(favs).filter(item => {
            return item.key !== key
        })
        localStorage.setItem(KEY, JSON.stringify(filtered));
    }
}
