//#userinput = #heroinput


let rooms = {
	"start": {
		"description":"CHOOSE YOUR HERO!!! CHOOSE your<b> HERO 1st or 2nd</b>",
		"directions": {
			"north": "clearing1",
			"west": "bridge1"
		}
	},
	"clearing1":{
		"description":"1",
		"directions":{
			"south":"start",
			"north":"lighthouse",
			"east":"trolls"
		}
	},
	"lighthouse":{
		"description": "2",
		"directions": {
			"south": "clearing1"
		}
	},
	"trolls": {
		"description": "3",
		"directions": {
			"west": "clearing1"
		}
	},
	"bridge1":{
		"description":"1",
		"directions": {
			"east": "start",
			"west": "bridge2"
		}
	}

} // ENDARRAY - list of rooms