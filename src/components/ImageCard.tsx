import React from "react"
const ImageCard = (props: { title: string, image:string}) =>(
    <React.Fragment>
        <div style={{
            backgroundImage: `url(${props.image})`}}>
            <p>{props.title}</p>
        </div>
    </React.Fragment>
)
export default ImageCard