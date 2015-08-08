/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';

export default class Form extends Component {
	static propTypes = {
		onAddMessage: PropTypes.func
	}

	static defaultProps = {
		onAddMessage: () => {}
	}

	static getInitialState() {
		return {
			value: ''
		};
	}

	constructor( props ) {
		super( props );
		this.state = Form.getInitialState();
	}

	onSubmit( event ) {
		this.props.onAddMessage( this.state.value );
		this.setState( Form.getInitialState() );
		event.preventDefault();
	}

	onChange( event ) {
		this.setState( {
			value: event.target.value
		} );
	}

	render() {
		return (
			<form onSubmit={ ::this.onSubmit }>
				<input type="text" value={ this.state.value } onChange={ ::this.onChange } autoFocus />
				<button type="submit">Send</button>
			</form>
		);
	}
}
