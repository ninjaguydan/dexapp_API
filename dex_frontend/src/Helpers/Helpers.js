export function makeHundreds(num) {
	if (num < 10) {
		return `00${num}`
	} else if (num < 100) {
		return `0${num}`
	} else {
		return num
	}
}
export function getBaseStatTotal(arr) {
	return arr.reduce((a, b) => {
		return a + b
	}, 0)
}
