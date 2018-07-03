import React, { Component } from 'react';

class StoryItem extends Component {
	deleteStory(id) {
		this.props.onDelete(id);
	}

	render() {
		return (
			<li className="Story">
				"<i>{this.props.story.title}</i>" by <strong>{this.props.story.artist}</strong> <a href="#" onClick={this.deleteStory.bind(this, this.props.story.id)}>X</a>
			</li>
		);
	}
}

export default StoryItem;
