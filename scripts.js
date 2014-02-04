var result= new Array();
function encode(string){
	var len = string.length;
	var tmp,first, end;

	first= string.charAt(0);
	end= string.charAt(len-1);
	tmp=string.substr(0,Math.ceil(len/2))+end+string.substr((Math.ceil(len/2)))+first;
	result.unshift(tmp);
}

window.onload= function(){
	var encodeBtn = document.getElementById('encode-btn');
	var decodeBtn = document.getElementById('decode-btn');
	var stack = new Array();
	encodeBtn.onclick = function(){

		var str= document.getElementById('str').value;
		stack=str.split(" ");
		var length = stack.length;
		for(i=0;i<length;i++){
			encode(stack[i]);
		}
		alert(result);
	}
	decodeBtn.onclick = function(){
		
	}

}