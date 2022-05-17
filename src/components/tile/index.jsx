export default function ImgTile(props) {
	return <div className="tile">
		<img className='tile-img' style={props.isSelected? {opacity: 0.3}:{}} src={props.src} onClick={() => props.onClick()} />
	</div>
}