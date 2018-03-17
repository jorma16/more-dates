# more-dates
This is a Javascript library to obtain random dates based on other dates or not.

# Installation
`npm install --save more-dates`

# Usage
To obtain a random date:
```
const getRandomDate = require('more-dates');

const randomDate = getRandomDate();
```

To obtain a random date with a maximum date:
```
const getRandomDate = require('more-dates');

const randomDate = getRandomDate({ end: new Date('2020-10-10) });
```

To obtain a random date with a minimun date:
```
const getRandomDate = require('more-dates');

const randomDate = getRandomDate({ start: new Date('2020-10-10) });
```

To obtain a random date between two dates:
```
const getRandomDate = require('more-dates');
const randomDate = getRandomDate({ start: new Date('2020'), end: new Date('2021') });
```

# Parameters
| parameter     | Type   | Description      |
|---------------|--------|------------------|
| options       | Object | Options object   |
| options.start | Date   | The minimum date |
| options.end   | Date   | The maximum date |
