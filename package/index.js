async function getPrayer(latitude, longitude) {
	const BASE_URL = 'https://api.aladhan.com/v1/calendar';
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const rawResponse = await fetch(
		`${BASE_URL}/${year}/${month}?method=15&shafaq=general&latitude=${latitude}&longitude=${longitude}`
	);
	const response = await rawResponse.json();
	const currentDate = new Date()
		.toLocaleDateString('id-ID', { month: '2-digit', day: '2-digit', year: 'numeric' })
		.replace(new RegExp(/\//g), '-');

	const data =
		response.code !== 200
			? response.data
			: response.data.find((time) => time.date.gregorian.date === currentDate);

	return data;
}

module.exports = getPrayer;
