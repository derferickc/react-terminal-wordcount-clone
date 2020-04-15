function isPrime(num) {
	// 1,2,3
	if(num === 1 || num === 2) {
		return true
	} else if(num % 2 !== 0) {
		for(i = 3; i < num; i+= 2) { 
			console.log(i)
			if(num % i === 0) {
				return false;
			}
		}
	}

	return true
}

console.log(isPrime(391))