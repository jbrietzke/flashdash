app.factory('validGraph', function () {
	return {
		getKeysAndTypes : function (arrayOfData) {
			let keysAndTypes = {};
			let dataObj = arrayOfData[0];
			for(let key in dataObj) {
				keysAndTypes[key] = typeof key
				console.log(key, keysAndTypes[key])
			}
		}

	}
})