/**
 * Internal dependencies
 */

import { API_URL } from 'constants/config';

export function getMessages() {
	return new Promise( ( resolve ) => {
		let xhr = new XMLHttpRequest();
		xhr.open( 'GET', `${ API_URL }/messages.json` );
		xhr.send();
		xhr.onreadystatechange = () => {
			if ( 4 !== xhr.readyState ) {
				return;
			}

			let messages;
			try {
				messages = JSON.parse( xhr.responseText );
			} catch ( error ) {
				messages = [];
			}

			resolve( messages );
		};
	} );
}
