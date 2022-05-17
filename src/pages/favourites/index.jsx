import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import ImgTile from '../../components/tile';
import { deleteFavourite, getFavourites } from '../../service/favouriteTilesService';

export default function FavouritesPage(props) {
	const [tiles, setTiles] = useState([]);
	const [err, setError] = useState(undefined);
	const [unSelectedTiles, setUnSelectedTiles] = useState([]);

	useEffect(() => {
		let favs = getFavourites();
		setTiles(JSON.parse(favs));
	}, []);

	const unSelectImg = (key) => {
		deleteFavourite(key);
		// if(!unSelectedTiles.includes(key)){
		// 	setUnSelectedTiles([...unSelectedTiles, key])
		// }
		let favs = getFavourites();
		setTiles(JSON.parse(favs));
	}
	
	return <>
		{<Navbar/>}
		<div className='tiles-section'>
			{tiles.length == 0 ? <p className="text-center">You have not picked favourites yet.</p>:
			<div className='tiles'>
				{tiles.map((t) => {
					return <ImgTile isSelected={unSelectedTiles.includes(t.key)} key={t.key} src={t.url} onClick={()=> unSelectImg(t.key)}/>
				})}
			</div>}
		</div>
	</>
}