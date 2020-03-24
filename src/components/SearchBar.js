import React, { Component } from 'react';

export default class SearchBar extends Component {
	state = { term: '' };

	onInputChange = (e) => {
		this.setState({ term: e.target.value });
	};

	onFormSubmit = (e) => {
		e.preventDefault();
		this.props.onTermSubmit(this.state.term);
	};

	render() {
		return (
			<div>
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<input
							type="text"
							placeholder="Enter a search term..."
							onChange={this.onInputChange}
							value={this.state.term}
						/>
					</div>
				</form>
			</div>
		);
	}
}
