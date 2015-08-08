/**
 * Internal dependencies
 */

import * as ActionTypes from 'constants/action-types';
import { MESSAGES_TO_KEEP } from 'constants/config';

export default function( messages = [], action ) {
	switch ( action.type ) {
		case ActionTypes.RECEIVE_MESSAGE:
		case ActionTypes.RECEIVE_MESSAGES:
			return messages.concat( action.payload ).slice( -1 * MESSAGES_TO_KEEP );
			break;
		default:
			return messages.slice( -1 * MESSAGES_TO_KEEP );
	}
}
