let input = document.getElementById('input'),
    output = document.getElementById('text');
   

input.addEventListener('keyup', function(){
    output.innerHTML = input.value.replace(
    	/\{\{(\w*)\}\}/g, function(match) {
    		return match.toUpperCase();
    	}
    	);
}, false);