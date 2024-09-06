let uiButton = document.getElementById("UIVisibilityButton");
let sideUI = document.getElementById("SideUI");
var visible = true;
function changeUI() {
	if (visible) {
		sideUI.setAttribute('style', 'display:none');
		uiButton.setAttribute('value', '≫');
		visible = false;
	}
	if (!visible) {
		sideUI.setAttribute('style', 'display:block');
		uiButton.setAttribute('value', '≪');
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

