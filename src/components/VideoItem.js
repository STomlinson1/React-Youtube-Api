import React from 'react';
import parser from 'html-react-parser';

export default function VideoItem(props) {
	const { snippet } = props.video;
	const title = parser(snippet.title);

	return (
		<div
			className="item video-item"
			onClick={() => {
				props.onVideoSelect(props.video);
			}}
		>
			<img className="ui image" src={snippet.thumbnails.medium.url} alt={title} />
			<div className="content">
				<h5 className="Header">{title}</h5>
			</div>
		</div>
	);
}
