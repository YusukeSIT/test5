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


let pipeNumber = document.getElementById('pNumber');

pipeNumber.addEventListener('input', function() {
	pNumber = pipeNumber.getAttribute('value');
	createPipes();
});



let freqController = document.getElementById("freq");

freqController.addEventListener('input', function() {
	let buttons = document.getElementsByName("frequency");
	for(let i = 0; i < 3; i++) {
		if(buttons[i].checked) {
			frequ = buttons[i].getAttribute('value');
		}
	}
});



let DeviceVisible = document.getElementById('visible');

DeviceVisible.addEventListener('input', function() {
	let devices = document.getElementsByClassName('device');
	if (DeviceVisible.checked) {
		for (let i = 0; i < devices.length; i++) {
			devices.setAttribute('opacity', '1');
		}
	}
	else {
		for (let i = 0; i < devices.length; i++) {
			devices.setAttribute('src', '');
		}
	}
});
