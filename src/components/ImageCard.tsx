import React from "react"
const ImageCard = (a:any) => (
    <React.Fragment>
        <div style=`background-image:{a.imageUrl}`>
            <p>{a.title}</p>
        </div>
    <React.Fragment/>
)