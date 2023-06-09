import React from 'react';
import SearchBar from './components/SearchBar';
import SnackBar from './components/SnackBar';
import { images as imagesData } from './datas/images';

function App() {
	const [image, setImage] = React.useState(imagesData);

	const handleLiked = (id: number, isLiked: boolean) => {
		const newLikeStatus = image.map((image) => {
			if (image.id === id) {
				image.isLiked = isLiked;
			}
			return image;
		});
		setImage(newLikeStatus);
	};

	const totalLikedImage = image.filter((image) => image.isLiked).length;
	return (
		<React.Fragment>
			<SearchBar handleLiked={handleLiked} />
			<SnackBar totalLiked={totalLikedImage} />
		</React.Fragment>
	);
}
export default App;
