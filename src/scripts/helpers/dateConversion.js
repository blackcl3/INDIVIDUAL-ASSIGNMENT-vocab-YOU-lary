const dateConversion = (timestamp) => {
  const date = new Date(timestamp);
  const finalDate = `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
  return finalDate;
};

export default dateConversion;
