let 








let freqController = document.getElementById("freq");

freqController.addEventListener('input', function() {
	let buttons = document.getElementsByName("frequency");
	for(let i = 0; i < 3; i++) {
		if(buttons[i].checked) {
			frequ = buttons[i].getAttribute('value');
		}
	}
});

