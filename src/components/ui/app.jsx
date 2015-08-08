/**
 * External dependencies
 */

import React, { Component } from 'react';

/**
 * Internal dependencies
 */

import MessageData from 'components/data/message-data';
import Messages from 'components/ui/messages';
import Form from 'components/ui/form';

export default class App extends Component {
	render() {
		return (
			<MessageData>
				<Messages />
				<Form />
			</MessageData>
		);
	}
}
