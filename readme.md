# Prayer Times Package

Wrap the [Aladhan Prayer Times API](https://aladhan.com/)

    const  getPrayer  =  require('prayer-times');
    const  get  =  async () => {
    	const  latitude  =  -6.21462;
    	const  longitude  =  0;
    	const  prayer  =  await  getPrayer(latitude,  longitude);
    	console.log(prayer);
    };

    get();
