import { Fragment, useState } from 'react';
import { images as imagesData } from './datas/images';

function App() {
	const [image, setImage] = useState(imagesData);
	const totalLikedImage = image.filter((image) => image.isLiked).length;
	return <Fragment></Fragment>;
}
export default App;
