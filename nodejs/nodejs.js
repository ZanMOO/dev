function sum(datas) {
	return datas.reduce(function(previousValue, currentValue) {
		return previousValue + currentValue;
	}
		, 0);
}

const datas = [1, 2, 3, 4, 5];

console.log("합계:", sum(datas));

