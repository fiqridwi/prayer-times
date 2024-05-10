async function getPrayer() {
	const BASE_URL = 'https://api.aladhan.com/v1/calendar';
	const date = new Date();
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const latitude = -6.2088;
	const longitude = 106.8456;
	const rawResponse = await fetch(
		`${BASE_URL}/${year}/${month}?method=15&shafaq=general&latitude=${latitude}&longitude=${longitude}`
	);
	const response = await rawResponse.json();
	const todayPrayer = response.data.find((time) => {
		return (
			time.date.gregorian.date ===
			new Date()
				.toLocaleDateString('id-ID', { month: '2-digit', day: '2-digit', year: 'numeric' })
				.replace(new RegExp(/\//g), '-')
		);
	});
	return todayPrayer;
}

module.exports = getPrayer;
