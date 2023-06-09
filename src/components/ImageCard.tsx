import React from "react";
import { LikeButton } from "./Buttons";

const ImageCard = (props: { title: string, image:string}) =>(
    <React.Fragment>
        <div style={{
            backgroundImage: `url(${props.image})`}}>
            <LikeButton />
            <p>{props.title}</p>
        </div>
    </React.Fragment>
)
export default ImageCard