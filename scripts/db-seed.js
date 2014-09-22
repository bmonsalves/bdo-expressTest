var Artist = require('../lib/artists');

var megadeth = new Artist({
	name: 'Megadeth',
	slug: 'megadeth',
	albums:[
		{title: 'disco 1', year: 1990, image: 'disc1'},
		{title: 'disco 2', year: 1995, image: 'disc2'},
		{title: 'disco 4', year: 1993, image: 'disc4'},
		{title: 'disco 34', year: 2000, image: 'disc34'},
	],
	shows:[
		{city: 'ciudad1'},
		{city: 'ciudad2'},
		{city: 'ciudad5'},
	]
});

megadeth.save(function(err, megadeth){
	console.log('megadeth guardado');
});