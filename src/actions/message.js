/**
 * Internal dependencies
 */
import * as ActionTypes from 'constants/action-types';

export function receiveMessage( message ) {
	return {
		type: ActionTypes.RECEIVE_MESSAGE,
		payload: message
	};
}

export function receiveMessages( messages ) {
	return {
		type: ActionTypes.RECEIVE_MESSAGES,
		payload: messages
	};
}
