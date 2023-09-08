function fibonacci(num) {
// your code here

	if(num <= 0){
		return [];
	}
	else if(num == 1){
		return [0];
	}
	else if(n == 2){
		return [0 , 1]
	}
	else{
		 const fibSequence = [0, 1];
    for (let i = 2; i < num; i++) {
      const nextValue = fibSequence[i - 1] + fibSequence[i - 2];
      fibSequence.push(nextValue);
	}
		return fibSequence;
}

}

module.exports = fibonacci;
