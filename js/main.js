function clicked(e){
	var controller = document.getElementById("musicController");
	if(e.text == "Music1"){
		controller.src = "audio/Aimer - bL∞dy f8.mp3";
	} else if(e.text == "Music2"){
		controller.src = "audio/4円 - アイロニ.mp3";
	} else if(e.text == "Music3"){
		controller.src = "audio/Battlefield - Seven Nation Army (The Glitch Mob Remix).mp3";
	} else if(e.text == "Music4"){
		controller.src = "audio/DAOKO,米津玄師 - 打上花火.mp3";
	}
}