import { useEffect, useState } from 'react';
import Navbar from '../../components/navbar';
import ImgTile from '../../components/tile';
import fetchTilesData from '../../service/fetchTilesData';
import { setFavourite } from '../../service/favouriteTilesService';

export default function HomePage(props) {
	const [tiles, setTiles] = useState([]);
	const [err, setError] = useState(undefined);
	const [selectedTiles, setSelectedTiles] = useState([]);
	useEffect(() => {
		fetchTilesData().then(data => {
			setTiles(data);
		}).catch(err => {
			setError(err);
		})
	}, []);

	const keyFromUrl = (url) => { 
		url = url.split("/");
		let fileName = url[url.length -1];
		let imgName = fileName.split(".");
		return imgName[0];
	}

	const setFavouriteImg = (obj) => {
		setFavourite(obj);
		if(!selectedTiles.includes(obj.key)){
			setSelectedTiles([...selectedTiles, obj.key]);
		}
	}
	
	return <>
		{<Navbar/>}
		<div className='tiles-section'>
			{err == undefined ? <><p className="text-center">Choose your fav snap.</p>
			<div className='tiles'>
				{tiles.map((t) => {
					let key = keyFromUrl(t.url);
					return <ImgTile isSelected={selectedTiles.includes(key)} key={key} src={t.url} onClick={()=> setFavouriteImg({key: key, url: t.url})}/>
				})}
			</div></>: <p className="text-center">Oops try again later.</p>}
		</div>
	</>
}