flag = 1;
flag2 = 1;
function insertarOp(tecla){
	switch(tecla){
		case ' + ':
			if (flag == 1){
				document.getElementById('screen').value = document.getElementById('screen').value + tecla;
			}
			flag = 0;
			flag2 = 0;
		break;
		case ' - ':
			if (flag == 1){
				document.getElementById('screen').value = document.getElementById('screen').value + tecla;
			}
			flag = 0;
			flag2 = 0;
		break;
		case ' / ':
			if (flag2 == 1){
				document.getElementById('screen').value = document.getElementById('screen').value + tecla;
			}
			flag2 = 0;
		break;
		case ' * ':
			if (flag2 == 1){
				document.getElementById('screen').value = document.getElementById('screen').value + tecla;
			}
			flag2 = 0;
		break;
	}
}

function insertarNum(num){
	if (document.getElementById('screen').value != "SyntaxError" && flag != 3){
		document.getElementById('screen').value = document.getElementById('screen').value + num;
		flag = 1;
		flag2 = 1;
	}
}
        
function result(){
	if (document.getElementById('screen').value != "" && document.getElementById('screen').value != "SyntaxError"){  
		document.getElementById('screen').value = eval(document.getElementById('screen').value);
	} else {
			document.getElementById('screen').value = "";
		}
	if (document.getElementById('screen').value.length > 7){
		document.getElementById('screen').value = (eval(document.getElementById('screen').value)).toExponential();
	}
	if (document.getElementById('screen').value == "Infinity"){
		document.getElementById('screen').value = "SyntaxError";
	}
}
        
function clearAll(){
	document.getElementById('screen').value = "";
	flag = 1;
	flag2 = 0;
}