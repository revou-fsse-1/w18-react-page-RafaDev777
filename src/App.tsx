import React from 'react';
import SearchBar from './components/SearchBar';
import LikedImageBar from './components/LikedImageBar';
import { images as imagesData } from './datas/images';
import { JoinMembershipButton } from './components/Buttons';
import PopupMembership from './components/PopupMembership';

function App() {
	const [image, setImage] = React.useState(imagesData);
	const [isRegistered, setIsRegistered] = React.useState(false);
	const [showForm, setShowForm] = React.useState(false);

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
			<LikedImageBar totalLiked={totalLikedImage} />
			<SearchBar handleLiked={handleLiked} />
			<JoinMembershipButton
				disabled={isRegistered}
				onclick={() => setShowForm}
			/>
			{isRegistered && <div></div>}
			{showForm && (
				<PopupMembership
					setShowForm={setShowForm}
					setIsRegistered={setIsRegistered}
				/>
			)}
		</React.Fragment>
	);
}
export default App;
