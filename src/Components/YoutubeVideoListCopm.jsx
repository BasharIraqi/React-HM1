import React from "react";

export default function YoutubeVideoListCopm(props) {


    return (
        <>
            {props.list.map(video => (
                <div>
                    <h1>{video.title}</h1>
                <iframe width={video.width} height={video.height} src={video.url} title="video.title" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            ))}

        </>
    )

}