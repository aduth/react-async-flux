/**
 * External dependencies
 */

import React, { Component, PropTypes } from 'react';

export default class Messages extends Component {
	static propTypes = {
		messages: PropTypes.arrayOf( PropTypes.string )
	}

	render() {
		const { messages } = this.props;

		return (
			<ul>
				{ messages.map( ( message, index ) => {
					return <li key={ index }>{ message }</li>;
				} ) }
			</ul>
		);
	}
}
