const getPrayer = require('prayer-times');

const get = async () => {
	const prayer = await getPrayer();

	console.log(prayer);
};

get();
