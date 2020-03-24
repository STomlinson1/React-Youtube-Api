import './VideoList.css';
import VideoItem from './VideoItem';
import React from 'react';

export default function VideoList(props) {
	const renderedVideos = props.videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				video={video}
				onVideoSelect={props.onVideoSelect}
			/>
		);
	});

	return (
		<div id="video-list" className="ui inverted relaxed divided list">
			{renderedVideos}
		</div>
	);
}
