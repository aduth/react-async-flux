/**
 * External dependencies
 */

import React, { Component } from 'react';
import socketio from 'socket.io-client';
import { connect } from 'react-redux';

/**
 * Internal dependencies
 */

import { API_URL } from 'constants/config';
import { receiveMessage, receiveMessages } from 'actions/message';
import { getMessages } from 'utils/api';

/**
 * Selectors
 */

function select( state ) {
	return {
		messages: state.messages
	};
}

class MessageData extends Component {
	componentWillMount() {
		this.io = socketio( API_URL );
		this.io.on( 'message', ( message ) => {
			this.props.dispatch( receiveMessage( message ) );
		} );

		getMessages().then( ( messages ) => {
			this.props.dispatch( receiveMessages( messages ) );
		} );
	}

	componentWillUnmount() {
		this.io.off( 'message' );
	}

	addMessage( message ) {
		this.io.emit( 'message', message );
	}

	render() {
		return React.DOM.div( null, React.Children.map( this.props.children, ( child ) => {
			return React.cloneElement( child, {
				messages: this.props.messages,
				onAddMessage: ::this.addMessage
			} );
		}, this ) );
	}
}

export default connect( select )( MessageData );
