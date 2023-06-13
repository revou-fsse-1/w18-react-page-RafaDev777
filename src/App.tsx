import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import LikedImageBar from './components/LikedImageBar';
import Modal from 'react-modal';
import RegisterForm from './components/RegisterForm';
import SnackBar from './components/SnackBar';

Modal.setAppElement('#root');

function App() {
	const [query, setQuery] = useState('');
	const [image, setImage] = useState(imagesData);
	const [showModal, setShowModal] = useState(false);
	const [showSnack, setShowSnack] = useState(false);

	// image related function ----------------------
	const filteredImage = imagesData.filter((data) => {
		if (query === '') {
			return data;
		} else if (data.title.toLowerCase().includes(query.toLowerCase())) {
			return data;
		}
	});

	// like related function ------------------------
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

	// modal related function ----------------------
	const openModal = () => setShowModal(true);
	const closeModal = () => setShowModal(false);
	const openSnack = () => setShowSnack(true);

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
			{!showSnack && (
				<button onClick={openModal} className="bg-emerald-600">
					<p className={'text-3xl'}>Join our Membership!</p>
				</button>
			)}

			<Modal isOpen={showModal}>
				<button onClick={closeModal}>X</button>
				<h2>Join The club</h2>
				<RegisterForm closeModal={closeModal} openSnack={openSnack} />
			</Modal>

			{showSnack && <SnackBar />}
		</Fragment>
	);
}
export default App;
