var x = document.getElementsByClassName("check");
var i;
for (i = 0; i < 4; i++) {
    x[i].checked = true;
}
document.getElementById("generate").onclick = generatePassword;
function generatePassword() {
	var length = document.getElementById("length").value;
    var retVal = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";    
    var lower = "abcdefghijklmnopqrstuvwxyz"; //to upper 
    var numeric = '0123456789';
    var punctuation = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~';
    var charset = "";
	if(document.getElementById("num").checked	){
		charset += numeric;
	}
	if(document.getElementById("upper").checked){
		charset += upper;
	}
	if(document.getElementById("lower").checked){
		charset += lower;
	}
	if(document.getElementById("symbols").checked){
		charset += punctuation;
	}
	if(length > 0 && length <= 128){
	    while(retVal.length < length){
		    for (var i = 0, n = charset.length; i < length; ++i) {
		    	if(retVal.length < length){
		        	retVal += charset.charAt(Math.floor(Math.random() * n));
		    	}else{
		    		break;
		    	}
		    }
	    }
	}else{
		alert("Please enter valid length");
	}
	console.log(retVal);
	var htm = retVal;
    htm = htm.replace(/</g, '&lt;');
    htm = htm.replace(/>/g, '&gt;');
    document.getElementById("pass").textContent = htm;
}
document.getElementById("copy").onclick = copyToClipboard;
function copyToClipboard(elementId) {
  // Create a "hidden" input
  var aux = document.createElement("input");

  // Assign it the value of the specified element
  aux.setAttribute("value", document.getElementById('pass').innerHTML);

  // Append it to the body
  document.body.appendChild(aux);

  // Highlight its content
  aux.select();

  // Copy the highlighted text
  document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);

}