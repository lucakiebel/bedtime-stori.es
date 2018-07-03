import React, {Component} from 'react';
import './App.css';
import Stories from './Components/Stories';
import AddStory from './Components/AddStory'

class App extends Component {

	constructor() {
		super();
        this.state = {};
		this.state.stories = [];
	}

	componentWillMount() {
		this.setState({stories: [
			{
				id: 1,
				title: "Lullaby",
				artist: "Peter Peterson"
			},
			{
				id: 2,
				title: "Bedtime Story",
				artist: "Jack Andrews"
			},
			{
				id: 3,
				title: "Sleep Tight",
				artist: "John Doe"
			}
		]});
	}

	handleAddStory(story) {
		let stories = this.state.stories;
		story.id = stories[stories.length-1].id +1;
		stories.push(story);
		this.setState({stories: stories});
	}

	handleDeleteStory(id) {
		let stories = this.state.stories;
		stories = stories.filter(s => s.id !== id);
		this.setState({stories: stories});
	}

	render() {
		return (
			<div className="App">
				<AddStory addStory={this.handleAddStory.bind(this)} />
				<Stories stories={this.state.stories} onDelete={this.handleDeleteStory.bind(this)} />
			</div>
		);
	}
}

export default App;
