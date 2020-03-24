import React from 'react';
import parser from 'html-react-parser';

export default function VideoDetail(props) {
	if (!props.video) {
		return <div />;
	}

	const videoSrc = `https://www.youtube.com/embed/${props.video.id.videoId}`;
	const title = parser(props.video.snippet.title);

	return (
		<div>
			<div className="ui embed">
				<iframe title="video player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header">{title}</h4>
				<p>{props.video.snippet.description}</p>
			</div>
		</div>
	);
}
