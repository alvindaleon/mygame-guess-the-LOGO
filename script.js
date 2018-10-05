//#userinput = #heroinput


let currentRoom = 'start';

function changeRoom(dir) {
	if(rooms[currentRoom].directions[dir] !== undefined) {
		currentRoom = rooms[currentRoom].directions[dir];
		$('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
	}
}


$(document).ready(function() { //load 1st

	$('#game-text').append("<p>" + rooms.start.description + "</p>");//choose room

    $(document).keypress(function(key){
    	if (key.which === 13 && $('#heroinput').is(':focus')) {//ENTER KEY
    		let value = $("#heroinput").val().toLowerCase(); //for command
			
			switch(value){//choosing HERO
				case "north":
					changeRoom("north");
					break;
				case "south":
					changeRoom("south");
					break;
				default:
					alert ("invalid INPUT");
			}

    	}
    });
});


//let value = $("#heroinput").val(); //for command