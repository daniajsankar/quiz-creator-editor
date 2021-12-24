import React from 'react';

function VideosShow({ link }) {
	return (
		<div className="videosShow" >
			<iframe
				title="youtube video"
				src={
					link.includes("watch")
						? "https://www.youtube.com/embed/" +
						link.split("v=")[1].split("&")[0]
						: "https://www.youtube.com/embed/" +
						link.split("youtu.be")[1].split("&")[0]
				}
				frameBorder="0"
			/>
		</div>
	);
}

export default VideosShow;
