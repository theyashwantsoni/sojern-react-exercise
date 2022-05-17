const URL = "https://random.dog/woof.json";
const DEFAULT_TILES_PER_PAGE = 6;

export default async function fetchTilesData(number_of_tiles = DEFAULT_TILES_PER_PAGE){
    try {
        let data = [];
        for (let index = 0; index < number_of_tiles; index++) {
            let response = await fetch(URL);
            data.push( await response.json());            
        }
        return data;
    } catch (error) {
        throw error;
    }
}