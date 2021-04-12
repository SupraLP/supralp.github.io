function loadWebInteractivePlayer(location) {
	switch (location) {
		case "ohe":
			document.getElementById("OpenHouseExplorer").innerHTML = '<iframe src="WebGLApplications/OpenHouseExplorer/embed.html" width="482px" height="400" scrolling="no" style="border: none;">the script couldn`t be loaded</iframe>';
			break;
		case "Main Game":
			document.getElementById("maingame").innerHTML = '<iframe src="webapps/phosphorus/main-game.html" width="482px" height="400" scrolling="no" style="border: none;">the script couldn`t be loaded</iframe>';
			break;
		case "island":
			document.getElementById("island").innerHTML = '<iframe src="webapps/phosphorus/island.html" width="482px" height="400" scrolling="no" style="border: none;">the script couldn`t be loaded</iframe>';
			break;
		case "GalaxyUnderAttack":
			document.getElementById("GalaxyUnderAttack").innerHTML = '<iframe src="https://glt.sanz-berlin.de/supra/WebGLApplications/GalaxyUnderAttack/embed.html" width="482px" height="400" scrolling="no" style="border: none;">the script couldn`t be loaded</iframe>';
			break;
		default:
			alert("something went wrong. you should inform the developer unless they already know.");
	}
}
