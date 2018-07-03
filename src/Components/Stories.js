import React, { Component } from 'react';
import StoryItem from './StoryItem';

class Stories extends Component {

	deleteStory(id) {
		this.props.onDelete(id);
	}

	render() {
		let storyItems = this.props.stories.map(story => {
			return (
				<StoryItem key={story.id} story={story} onDelete={this.deleteStory.bind(this)} />
			)
		});
		return (
			<div className="Stories">
				<h3>Latest Stories</h3>
				<br/>
				{storyItems}
			</div>
		);
	}
}

export default Stories;
