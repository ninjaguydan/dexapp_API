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
export function titleCase(str) {
	return str.charAt(0).toUpperCase() + str.slice(1)
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
	let roundDown = Math.floor
	let years = getYears(milli)
	let months = getMonths(milli)
	let weeks = getWeeks(milli)
	let days = getDays(milli)
	let hours = getHours(milli)
	let min = getMinutes(milli)
	let sec = getSeconds(milli)

	if (roundDown(years) > 0) {
		return `${roundDown(years)}y`
	} else if (roundDown(months) > 0) {
		return `${roundDown(months)}mo`
	} else if (roundDown(weeks) > 0) {
		return `${roundDown(weeks)}w`
	} else if (roundDown(days) > 0) {
		return `${roundDown(days)}d`
	} else if (roundDown(hours) > 0) {
		return `${roundDown(hours)}h`
	} else if (roundDown(min) > 0) {
		return `${roundDown(min)}m`
	} else {
		return `${roundDown(sec)}s`
	}
}
