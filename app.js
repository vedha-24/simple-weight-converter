document.getElementById('output').style.visibility="hidden";
document.getElementById('pound').addEventListener('input', function(e){
	let lbs = e.target.value;
	document.getElementById('output').style.visibility="visible";
	document.getElementById('gramoutput').innerHTML = lbs/0.0022046;
	document.getElementById('kilooutput').innerHTML = lbs/2.2046;
	document.getElementById('ounoutput').innerHTML = lbs*16;
});
