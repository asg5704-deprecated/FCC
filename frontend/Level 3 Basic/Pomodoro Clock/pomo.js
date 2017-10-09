let workCounter = (function() {
		let countA = 25;
	function changeBy(val) {
		countA += val;
	}

	return {
		workAdd: function() {
			changeBy(1);
			minutes.innerHTML = `${workCounter.workVal()}`;
		},
		workSub: function() {
			changeBy(-1);
			minutes.innerHTML = `${workCounter.workVal()}`;
		},
		workVal: function() {
			return countA;
		}		
	}
})();

let restCounter = (function() {
		let countB = 5;
	function changeBy(val) {
		countB += val;
	}
	
	return {
		restAdd: function() {
			changeBy(1);
			rest.innerHTML = `${restCounter.restVal()}`;
		},
		restSub: function() {
			changeBy(-1);
			rest.innerHTML = `${restCounter.restVal()}`;
		},
		restVal: function() {
			return countB;
		}		
	}
})();

document.querySelector('#add').addEventListener('click', workCounter.workAdd);
document.querySelector('#sub').addEventListener('click', workCounter.workSub);
document.querySelector('#addRest').addEventListener('click', restCounter.restAdd);
document.querySelector('#subRest').addEventListener('click', restCounter.restSub);
let minutes = document.querySelector('#minutes');
let rest = document.querySelector('#rest');

document.getElementById('startBtn').addEventListener('click', startIt);
document.getElementById('resetBtn').addEventListener('click', resetIt);
let timer = Timr(workCounter.workVal() + 'm', { formatOutput: 'hh:mm:ss' });

function startIt() {
	let displayTimer = document.getElementById('time');
	timer = Timr(workCounter.workVal() + 'm', { formatOutput: 'hh:mm:ss' });
	timer.start();
	setInterval(function() {
		var cd = timer.formatTime().raw.currentMinutes + ":" + timer.formatTime().raw.currentSeconds;
		displayTimer.textContent = cd;
 	}, 1000)
	timer.finish((self) => {
		alert('Work Time Finished!');
		timer = Timr(restCounter.restVal() + 'm', { formatOutput: 'hh:mm:ss' });
		timer.start();
		setInterval(function() {
			var cd = timer.formatTime().raw.currentMinutes + ":" + timer.formatTime().raw.currentSeconds;
			displayTimer.textContent = cd;
	 	}, 1000)
 		timer.finish((self) => {
 			alert('Rest Time Finished')
 		});
  	});
}

function resetIt() {
	timer.stop();
}