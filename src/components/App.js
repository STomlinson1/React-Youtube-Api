import KEY from '../api/apiKey';
import youtube from '../api/youtube';

import React, { Component } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

export default class App extends Component {
	state = { videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit('Lebron James');
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get('/search', {
			params : {
				part       : 'snippet',
				q          : term,
				type       : 'video',
				maxResults : '6',
				key        : KEY
			}
		});

		this.setState({
			videos        : response.data.items,
			selectedVideo : response.data.items[0]
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
		console.log(this.state.selectedVideo);
	};

	render() {
		return (
			<div className="ui inverted segment basic" style={{ minHeight: '100vh' }}>
				<Header />
				<div className="ui container">
					<div className="ui segment basic">
						<SearchBar onTermSubmit={this.onTermSubmit} />
					</div>
					<div className="ui grid">
						<div className="row">
							<div className="eleven wide column">
								<VideoDetail video={this.state.selectedVideo} />
							</div>
							<div className="five wide column">
								<VideoList
									videos={this.state.videos}
									onVideoSelect={this.onVideoSelect}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
