import React, { Component } from 'react';

class AddStory extends Component {

	constructor() {
		super();
		this.state = {
			newStory: {}
		}
	}



	handleSubmit(e) {
		e.preventDefault()
		if(!this.refs.title.value) alert("Title is required");
		else {
			this.setState({newStory: {
				title: this.refs.title.value,
				artist: this.refs.artist.value
			}}, function() {
				this.props.addStory(this.state.newStory);
			});
		}
	}

	render() {
		return (
			<div className="AddStory">
				<h3>Add Story</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<label>Title</label>
						<input type="text" ref="title" />
						<br/>
						<label>Artist</label>
						<input type="text" ref="artist" />
						<br/>
						<input type="submit" value="Submit"/>
					</div>
				</form>
			</div>
		);
	}
}

export default AddStory;
