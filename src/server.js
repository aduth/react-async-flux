/**
 * External dependencies
 */

import express from 'express';
import http from 'http';
import socketio from 'socket.io';

/**
 * Internal dependencies
 */

import createStore from 'utils/create-store';
import { receiveMessage } from 'actions/message';

/**
 * App initialization
 */

const app = express();
const server = http.Server( app );
const io = socketio( server );
const port = process.env.PORT || 3000;
const store = createStore();

/**
 * Middlewares
 */

app.use( express.static( __dirname + '/../public' ) );

/**
 * Routes
 */

app.get( '/messages.json', ( request, response ) => {
	// A better approach here would be to send state alongside the initial
	// response as a global variable, then hydrate the Redux store client-side
	response.send( store.getState().messages );
} );

/**
 * Socket.io
 */

io.on( 'connection', ( socket ) => {
	console.log( 'User connected' );
	socket.on( 'message', ( message ) => {
		console.log( 'Received message "%s"', message );
		io.emit( 'message', message );
		store.dispatch( receiveMessage( message ) );
	} );
} );

/**
 * Start server
 */

server.listen( port, () => {
	console.log( 'Listening on port %d...', port );
} );
