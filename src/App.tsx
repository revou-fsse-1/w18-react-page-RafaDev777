import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';
import SearchBar from './components/SearchBar';
import ImageCard from './components/ImageCard';

function App() {
	const [query, setQuery] = useState('');
	const [image, setImage] = useState(imagesData);

	const totalLikedImage = image.filter((image) => image.isLiked).length;
	return (
		<Fragment>
			<SearchBar query={query} setQuery={setQuery} />
			<div>
				{imagesData
					.filter((data) => {
						if (query === '') {
							return data;
						} else if (data.title.toLowerCase().includes(query.toLowerCase())) {
							return data;
						}
					})
					.map((data, index) => (
						<ImageCard
							key={index}
							id={data.id}
							title={data.title}
							image={data.imgUrl}
							isLiked={data.isLiked}
						/>
					))}
			</div>
		</Fragment>
	);
}
export default App;
