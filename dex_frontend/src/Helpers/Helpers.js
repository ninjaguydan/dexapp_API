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
export function renderStars(num) {
	var result = ""
	for (var i = 1; i < 11; i++) {
		if (i <= num) {
			result = result + "<FaStar />"
		} else {
			result = result + "<FaRegStar />"
		}
	}
	return result
}
function getSeconds(milliseconds) {
	return milliseconds / 1000
}
function getMinutes(milliseconds) {
	return milliseconds / 60000
}
function getHours(milliseconds) {
	return milliseconds / 3600000
}
function getDays(milliseconds) {
	return milliseconds / 86400000
}
function getWeeks(milliseconds) {
	return milliseconds / 604800000
}
function getMonths(milliseconds) {
	return milliseconds / 2629746000
}
function getYears(milliseconds) {
	return milliseconds / 31556952000
}

export function getTimeDifference(date) {
	let now = new Date()
	let time = new Date(date)
	let milli = now - time

	if (Math.floor(getYears(milli)) > 0) {
		return `${Math.floor(getYears(milli))}y`
	} else if (Math.floor(getMonths(milli)) > 0) {
		return `${Math.floor(getMonths(milli))}mo`
	} else if (Math.floor(getWeeks(milli)) > 0) {
		return `${Math.floor(getWeeks(milli))}wks`
	} else if (Math.floor(getDays(milli)) > 0) {
		return `${Math.floor(getDays(milli))}d`
	} else if (Math.floor(getHours(milli)) > 0) {
		return `${Math.floor(getHours(milli))}h`
	} else if (Math.floor(getMinutes(milli)) > 0) {
		return `${Math.floor(getMinutes(milli))}m`
	} else {
		return `${Math.floor(getSeconds(milli))}s`
	}
}
