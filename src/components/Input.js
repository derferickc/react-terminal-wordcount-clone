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
		const { input } = this.state

		return (
			<div>
				<h1>Hello Versium Team</h1>
				<form onSubmit={this.handleSubmit}>
					<div>
						<textarea
							type="text"
							name="wordcountTextarea"
							value={input}
							onChange={this.handleChange}
						/>
					</div>
					<button
						type="submit"
					>Submit</button>
				</form>
			</div>
		)
	}
}

export default Input