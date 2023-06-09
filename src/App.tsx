import React from 'react';
import SearchBar from './components/SearchBar';
import { images as imagesData } from './datas/images';

function App() {
	const [image, setImage] = React.useState(imagesData);

	const handleLiked = (id: number, isLiked: boolean) => {
		const newLikeStatus = image.map((image) => {
			if (image.id === id) {
				image.isLiked = isLiked;
			}
			console.log(image.isLiked);
			return image;
		});
		setImage(newLikeStatus);
	};
	return (
		<React.Fragment>
			<SearchBar handleLiked={handleLiked} />
		</React.Fragment>
	);
}
export default App;
