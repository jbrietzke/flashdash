var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err, archive){
	archive
	.filter(function(archive){
		return path.extname(archive) === '.' + process.argv[3];
	})
	.forEach(function(archive){
		console.log(archive);
	});
});
