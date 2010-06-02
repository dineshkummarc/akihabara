{
	// Graphic resources.
	addImage:[	
		["logo","resources/akibahero/logo.png"],
		["sprites","resources/akibahero/cels.png"],
		["font","resources/akibahero/font.png"],
		["fontbig","resources/akibahero/fontbig.png"],
		["wp","resources/akibahero/wallpaper.png"],
		["warn","resources/akibahero/warn.png"],
		// The "ingame" image is loaded just before the song starts. Is different for each song.		
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:0},
		{id:"small2",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:16},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:16,tilerow:255,gapx:0,gapy:0},
	],
	addTiles:[
		{id:"discs",image:"sprites",tileh:16,tilew:40,tilerow:5,gapx:0,gapy:0},
		{id:"rings",image:"sprites",tileh:16,tilew:40,tilerow:5,gapx:0,gapy:17},
		{id:"uprings",image:"sprites",tileh:16,tilew:40,tilerow:5,gapx:0,gapy:35},
		{id:"table",image:"sprites",tileh:128,tilew:270,tilerow:1,gapx:200,gapy:0},
		{id:"discfire",image:"sprites",tileh:58,tilew:40,tilerow:5,gapx:0,gapy:51},
		{id:"songbar",image:"sprites",tileh:40,tilew:320,tilerow:1,gapx:0,gapy:128},
		{id:"energy",image:"sprites",tileh:18,tilew:100,tilerow:2,gapx:0,gapy:110},
		{id:"stars",image:"sprites",tileh:9,tilew:11,tilerow:3,gapx:320,gapy:128},
	],
	
	// Audio resources	
	addAudio:[
		["explosion",[audioserver+"explosion.mp3",audioserver+"explosion.ogg"],{channel:"sfx"}],
		["coin",[audioserver+"coin.mp3",audioserver+"coin.ogg"],{channel:"sfx"}],
		["default-menu-option",[audioserver+"select.mp3",audioserver+"select.ogg"],{channel:"sfx"}],
		["default-menu-confirm",[audioserver+"start.mp3",audioserver+"start.ogg"],{channel:"sfx"}]
	],
	
	// Sub-resource files.
	addBundle:[
	
		// Loading the songs... Note that "finalization" actions, like "addMarkerToSong" is called from here.
		{file:"resources/akibahero/bundle-song-demo.js",onLoad:function(load,res){ addMarkerToSong(song[res.setObject[0].property]) }},
		{file:"resources/akibahero/bundle-song-skee.js",onLoad:function(load,res){ addMarkerToSong(song[res.setObject[0].property]) }},
		
		// Loading the staff roll (is autogenerated from the loaded songs. Have a look to the resources file) ...
		{file:"resources/akibahero/bundle-credits.js"}
		
	]
}
