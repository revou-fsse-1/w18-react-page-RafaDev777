import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';

function App() {
	const [image, setImage] = useState(imagesData);
	const [isRegistered, setIsRegistered] = useState(false);
	const [showForm, setShowForm] = useState(false);

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
	return <Fragment></Fragment>;
}
export default App;
