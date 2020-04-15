import React, { Component } from "react"

class Input extends Component {

	constructor(props) {
		super(props)

		this.state = {
			input: ''
		}
	}

	handleSubmit = (event) => {
		event.preventDefault()
		this.props.handleText(this.state.input)
	}

	handleChange = (event) => {
		this.setState({
			input: event.target.value
		})
	}

	render () {
		// var value = this.state.input.replace('\\n', '\n');
		
		return (
			<div>
				<h1>Hello Versium Team</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<textarea
							type="text"
							name="wordcountTextarea"
							value={value}
							onChange={this.handleChange}
						/>
					</div>
					<button
						type="submit"
					>Submit Wordcount</button>
				</form>
			</div>
		)
	}
}

export default Input