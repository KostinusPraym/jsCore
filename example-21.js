"use strict";

const theObj = {
	name: "Murych",
	doLogThis: function () {
		console.log( "this is: ", globalThis );
	}
};


theObj.doLogThis();
var doLogThisGlobal = theObj.doLogThis;
doLogThisGlobal();


