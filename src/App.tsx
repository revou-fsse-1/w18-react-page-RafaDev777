import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import LikedImageBar from './components/LikedImageBar';
import Modal from './components/Modal';

function App() {
	const [query, setQuery] = useState('');
	const [image, setImage] = useState(imagesData);

	const filteredImage = imagesData.filter((data) => {
		if (query === '') {
			return data;
		} else if (data.title.toLowerCase().includes(query.toLowerCase())) {
			return data;
		}
	});

	const handleLike = (id: number, isLiked: boolean) => {
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
		<Fragment>
			<LikedImageBar totalLiked={totalLikedImage} />
			<SearchBar query={query} setQuery={setQuery} />
			<div>
				{filteredImage.map((data, index) => (
					<ImageCard
						key={index}
						id={data.id}
						title={data.title}
						image={data.imgUrl}
						isLiked={data.isLiked}
						handleLike={handleLike}
					/>
				))}
			</div>
			<button>Join our Membership</button>
			<Modal />
		</Fragment>
	);
}
export default App;
