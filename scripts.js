var enResult= new Array();
var deResult= new Array();
var lastBody = "";



function body (array){
	var len = array.length;
	for(i=0;i<len;i++){
		lastBody+=array[i]+" ";
	}
	document.getElementById('result').innerHTML=lastBody;
	document.getElementById('result').style.opacity='1';
	document.getElementById('result').style.height='inherit';
}

function encode(string){
	var len = string.length;
	var tmp,first, end;

	first = string.charAt(0);
	end   = string.charAt(len-1);
	tmp   = string.substr(0,Math.ceil(len/2))+end+string.substr(Math.ceil(len/2))+first;
	enResult.push(tmp);
}

function decode(string){
	var len = string.length;
	var tmp,mid;
	mid= Math.ceil(len/2)-1;

	end   = string.charAt(len-1);
	tmp   = string.substr(0,mid)+string.slice(mid+1,-1);
	deResult.push(tmp);
	
}

window.onload= function(){
	setTimeout(function(){
		document.getElementsByClassName('img').item(0).style.webkitFilter='blur(3px)';
		document.getElementsByTagName('section').item(0).style.marginTop=150+'px';
	},2000)

	var encodeBtn = document.getElementById('encode-btn');
	var decodeBtn = document.getElementById('decode-btn');
	var stack = new Array();

	encodeBtn.onclick = function(){
		var str = document.getElementById('str').value;
		stack   = str.split(" ");
		var length = stack.length;
		for(i=0;i<length;i++){
			encode(stack[i]);
		}
		body(enResult);
	}

	decodeBtn.onclick = function(){
		var str = document.getElementById('str').value;
		stack   = str.split(" ");
		var length = stack.length;
		for(i=0;i<length;i++){
			decode(stack[i]);
		}
		body(deResult);
	}

}

