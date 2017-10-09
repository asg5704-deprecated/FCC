let temp = '';
let calcArr = [];
let ch = '';
let num = '';
let floatPoint = 'false';
let mem = 0;

function calcIt(val) {
  var l = calcArr.length;
  //Testing for numbers
  if (!isNaN(val)) {
    if (mem === 0) { 
      if (l === 0) { 
        if (val !== '0') { 
          temp = document.jsCalc.result.value = val * 1;
          calcArr.push(val * 1);
          num += val;
        }
      } else if (val !== '0') { 
        calcArr.push(val * 1);
        temp = document.jsCalc.result.value += val * 1;
        num += val;
      } else if (flZero(calcArr, l - 1, floatPoint) || num > 0) { 
        calcArr.push(val * 1);
        temp = document.jsCalc.result.value += val * 1;
        num += val;
      }
    }
    
  } else {
    //Allow NaN input exceptions
    if (val === '.') { 
      ch = calcArr[l - 1] 
      if (floatPoint === 'false') {
        if (l === 0) {
        	calcArr.push(val);
          	temp = document.jsCalc.result.value += val;
          	num += val;
          	floatPoint = 'true';
          	mem = 0;
        } else if (num === '') {
          	val = '0' + val;
          	calcArr.push(val);
          	temp = document.jsCalc.result.value += val;
          	num += val;
          	floatPoint = 'true';
          	mem = 0;
        } else if (parseFloat(num + val + 0) === (num + val + 0) * 1) {
          	calcArr.push(val);
          	temp = document.jsCalc.result.value += val;
          	num += val;
          	floatPoint = 'true';
          	mem = 0;
        }
      }
      
    } else if (l === 0 || (l > 0 && mem !== 0)) {
      	calcArr.push(val);
      	temp = document.jsCalc.result.value += val;
      	num = '';
      	floatPoint = 'false';
      	mem = 0;
    } else if (l > 0) { 
      	ch = calcArr[l - 1];
     	if (val !== '-' && !testRegex(ch)) {
	    	calcArr.push(val);
	        temp = document.jsCalc.result.value += val;
	        floatPoint = 'false'; 
	        num = '';
	        mem = 0;
    } else if (!testRegex(ch) || val === '-') { 
        if ((!(ch === '-' && val === '-')) || val !== '-') {
          calcArr.push(val);
          temp = document.jsCalc.result.value += val;
          floatPoint = 'false';
          num = '';
          mem = 0;
        }
      }
    }
  }
  document.jsCalc.calculation.value = temp;
}

function testRegex(a) { 
	var regex = /\W/;
  	return regex.test(a);
}

function testMinus(b) {
	var regex = /-/;
  	return regex.test(b); 
}

function calcResult() { // the actual calculation
  	temp = eval(document.jsCalc.result.value);
  	temp = parseFloat(temp.toFixed(10));
  	document.jsCalc.result.value = temp;
  	calcArr.length = 0; 
  	calcArr.push(temp); 
 	num = 0; // reset
  	floatPoint = isFp(temp); 
  	mem = temp; 
}

function isFp(y) {
  if (isNaN(y)) {
    console.log(y, 'no number');
    return false;
  } else {
    var cfloatPoint = Math.round(y);
    if (cfloatPoint === y) { 
    	return 'false';
    } else {
      return 'true';
    }
  }
}

function clearIt() {
	// Clear last item of array
	calcArr.pop();
  	document.jsCalc.result.value = calcArr.join('');
  	num = num.substr(0, num.length - 1);
  	tr = temp.toString().substr(0, temp.length - 1);
  	document.jsCalc.calculation.value = tr;
}

function clearAll() {
	//Reset All
	temp = 0;
  	num = 0;
 	floatPoint = 'false';
  	calcArr.length = 0;
}

function flZero(array, lt, floatPoint) {
  if (testRegex(array[lt]) || floatPoint === 'true') {
    return true;
  }
}