"use strict";
const theObj = {
	name: "Murych",
	doLogThis: function () {
		console.log( "this is: ", this );
	}
};

setTimeout( theObj.doLogThis, 1 );

