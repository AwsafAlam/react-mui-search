export function formatDateMonth(monthIndex) {
	var monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	]
	return monthNames[monthIndex]
}

export function formatDate(date) {
	var monthNames = [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sept',
		'Oct',
		'Nov',
		'Dec'
	]

	var day = date.getDate()
	var monthIndex = date.getMonth()
	var year = date.getFullYear()

	var hours = date.getHours()
	var minutes = date.getMinutes()
	// var seconds = date.getSeconds();
	// Aug 2 2019 at 12:12
	return `${day} ${monthNames[monthIndex]}, ${year} ${hours}:${minutes}`
}
