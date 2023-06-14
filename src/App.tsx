import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';
import LikedImageBar from './components/LikedImageBar';
import Modal from 'react-modal';
import RegisterForm from './components/RegisterForm';
import SnackBar from './components/SnackBar';
import Logo from './components/Logo';

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
			<main className="flex flex-col items-center">
				<div className="flex flex-col mt-20 items-center gap-4 scale-150">
					<Logo />
					<h1 className="text-3xl text-white font-bold mb-6">
						Photo Club Gallery
					</h1>
				</div>
				<LikedImageBar totalLiked={totalLikedImage} />
				<SearchBar query={query} setQuery={setQuery} />
				<div className="mb-10 max-w-5xl mx-auto flex flex-wrap flex-row justify-center items-center gap-4">
					{filteredImage.length !== 0 ? (
						filteredImage.map((data, index) => (
							<ImageCard
								key={index}
								id={data.id}
								title={data.title}
								image={data.imgUrl}
								isLiked={data.isLiked}
								handleLike={handleLike}
							/>
						))
					) : (
						<div className="text-white text-2xl font-bold">
							Oops no photos found, try another keyword!
						</div>
					)}
				</div>
				{!showSnack && (
					<button
						onClick={openModal}
						className="bg-sky-600 text-lg text-white py-3 px-5 rounded-xl"
					>
						Join our Membership!
					</button>
				)}

				<Modal
					isOpen={showModal}
					overlayClassName={
						'fixed inset-0 bg-black/50 flex justify-center items-center'
					}
					className={'relative bg-white max-w-lg rounded-2xl'}
				>
					<button
						onClick={closeModal}
						className="absolute top-0 right-0 text-2xl font-thin mt-2 mr-3"
					>
						X
					</button>
					<div className="my-12 mx-12 justify-center">
						<h2 className="font-bold text-2xl">
							Register to Photo Club Member
						</h2>
						<small>
							Get countless benefit by joining as a member of Photo Club
						</small>
						<RegisterForm closeModal={closeModal} openSnack={openSnack} />
					</div>
				</Modal>

				{showSnack && <SnackBar />}
			</main>
		</Fragment>
	);
}
export default App;
