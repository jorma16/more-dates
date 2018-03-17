const test = require('ava');
const getRandomDate = require('./get-random-date.funct');

test('getRandomDate returns a date', (t) => {
  const date = getRandomDate();
  t.truthy(date instanceof Date);
});

test('getRandomDate is different in 2 calls', (t) => {
  const date1 = getRandomDate();
  const date2 = getRandomDate();

  const result = (
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate()
  );

  t.falsy(result);
});

test('getRandomDate with start but not end is a future date', (t) => {
  const now = new Date();
  const result = getRandomDate({ start: now });
  t.true(result >= now);
});

test('getRandomDate with end and not start is a past date', (t) => {
  const now = new Date();
  const result = getRandomDate({ end: now });
  t.true(result <= now);
});

test('getRandomDate with start and end is between two dates', (t) => {
  const start = new Date('2018-10-20');
  const end = new Date('2018-12-12');
  const result = getRandomDate({ start, end });

  t.true(result >= start);
  t.true(result <= end);
});

test('getRandomDate with start > end throws an error', (t) => {
  const start = new Date('2020-10-10');
  const end = new Date('2018-10-10');

  const error = t.throws(() => {
    getRandomDate({ start, end });
  }, Error);

  t.is(error.message, 'start should be lower than end');
});
