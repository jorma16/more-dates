function getRandomDate(opts = {}) {
  const { start, end } = opts;
  if (start && end) {
    if (start > end) {
      throw new Error('start should be lower than end');
    }

    const timestamp = start.getTime() + (Math.random() * (end.getTime() - start.getTime()));
    return new Date(timestamp);
  }

  if (start) {
    const timestamp = start.getTime() + (Math.random() * (Number.MAX_SAFE_INTEGER - start.getTime()));
    return new Date(timestamp);
  }

  if (end) {
    const timestamp = Math.random() * end.getTime();
    return new Date(timestamp);
  }

  const timestamp = Math.min(8640000000000000, Math.random() * Number.MAX_SAFE_INTEGER);
  return new Date(timestamp);
}

module.exports = getRandomDate;
