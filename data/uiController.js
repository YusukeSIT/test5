let uiButton = document.getElementById("UIVisibilityButton");
let sideUI = document.getElementById("SideUI");
var visible = true;
function changeUI() {
	if (visible == true) {
		sideUI.setAttribute('style', 'display:none');
		uiButton.setAttribute('value', '≫');
		uiButton.setAttribute('style', 'float:left');
		visible = false;
	}
	else if (visible == false) {
		sideUI.setAttribute('style', 'display:block');
		uiButton.setAttribute('value', '≪');
		uiButton.setAttribute('style', 'float:right');
		visible = true;
	}
}







let freqController = document.getElementById("freq");

freqController.addEventListener('input', function() {
	let buttons = document.getElementsByName("frequency");
	for(let i = 0; i < 3; i++) {
		if(buttons[i].checked) {
			frequ = buttons[i].getAttribute('value');
		}
	}
});

