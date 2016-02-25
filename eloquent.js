// Minimum

function min(a,b){
	return a>b? b : a ;
}


// Recursion

function isEven(num){
	switch(num){
		case 1:
			return false;
		case 0:
			return true;
		default:
			if(num>1){
				while(num-2>=0){
					if(num-2===0){
						return true;
					}else if(num-2===1){
						return false;
					}
					num=num-2;
				}
			}
	}
}

// Bean counting

function countChar(str,k){
	var strArr=str.split(''),count=0;
	strArr.forEach(function(a){
		if(a===k){
			count++;
		}
	});
	return count;
}

function countBs(str){
	return countChar(str,'B');
}