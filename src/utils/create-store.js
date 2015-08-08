/**
 * External dependencies
 */

import { createStore, combineReducers } from 'redux';

/**
 * Internal dependencies
 */

import * as reducers from 'reducers';

/**
 * Store initialization
 */

export default function() {
	const store = createStore( combineReducers( reducers ) );
	return store;
}
