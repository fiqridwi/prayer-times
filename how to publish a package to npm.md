## Create a simple npm package and publish it

### Initalzie a project directory with npm

```jsx
{
  "name": "prayer-times",
  "version": "1.0.0",
  "description": "prayer-times",
  "main": "index.js",
  "scripts": {
    "test": "echo \\"Error: no test specified\\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/fiqridwi/prayer-times.git"
  },
  "keywords": [
    "prayer"
  ],
  "author": "fiqri_dwi",
  "license": "ISC",
  "bugs": {
    "url": "<https://github.com/fiqridwi/prayer-times/issues>"
  },
  "homepage": "<https://github.com/fiqridwi/prayer-times#readme>"
}

```

### Create and export a function

```jsx
async function getPrayer() {
	const BASE_URL = '<https://api.aladhan.com/v1/calendar>';
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
				.replace(new RegExp(/\\/ / g), '-')
		);
	});
	return todayPrayer;
}

module.exports = getPrayer;
```

### Testing the package in local

Go to package folder

```jsx
npm link

```

Go to test-package folder

```jsx
npm link prayer-times

```

### Publish the package

Login to npm in terminal and fill the npm credential

```jsx
npm login

```

Publish the package

```jsx
npm publish

```
