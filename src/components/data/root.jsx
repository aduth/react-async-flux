/**
 * External dependencies
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

/**
 * Internal dependencies
 */

import App from 'components/ui/app';
import createStore from 'utils/create-store';

export default class Root extends Component {
	render() {
		return (
			<Provider store={ createStore() }>
				{ () => <App /> }
			</Provider>
		);
	}
}
