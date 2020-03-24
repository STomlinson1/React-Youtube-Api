import KEY from '../api/apiKey';
import youtube from '../api/youtube';

import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {
	state = { videos: [], selectedVideo: null };

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params : {
				part       : 'snippet',
				q          : term,
				type       : 'video',
				maxResults : '5',
				key        : KEY
			}
		});

		this.setState({ videos: response.data.items });
		console.log(this.state.videos);
	};

	onVideoSelect = (video) => {};

	render() {
		return (
			<div>
				<Header />
				<div className="ui container">
					<SearchBar onTermSubmit={this.onTermSubmit} />

					<VideoList videos={this.state.videos} />
				</div>
			</div>
		);
	}
}
