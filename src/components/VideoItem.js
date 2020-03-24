import React from 'react';
import parser from 'html-react-parser';

export default function VideoItem(props) {
	const { snippet } = props.video;
	const title = parser(snippet.title);

	return (
		<div
			className="item video-item"
			onClick={() => {
				console.log('Clicked');
			}}
		>
			<img className="ui image" src={snippet.thumbnails.medium.url} />
			<div className="content">
				<h4 className="Header">{title}</h4>
			</div>
		</div>
	);
}
