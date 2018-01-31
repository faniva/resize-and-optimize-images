// My script

const fs = require('fs');
const jimp = require('jimp');


const images = [];


function getImagesToOptimize(crrPath){
	
	// Specify the current working directory
	fs.readdirSync(crrPath).forEach(file => {
		
			console.log(file);
			
	})
}

function optimizeImage(imagePath){
	
	// open a file called "lenna.png"
	jimp.read(imagePath, function (err, img) {
	    if (err) throw err;
	    img.resize(256, 256)            // resize
	         .quality(60)                 // set JPEG quality
	         .write("lena-small-bw.jpg"); // save

	});
	
}

console.log('hola');
