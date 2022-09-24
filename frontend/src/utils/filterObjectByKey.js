export const filterObjectbyKey = (obj, min, max,currency) => {
  return Object.keys(obj)
    .filter((key) => !key.includes(min) && !key.includes(max)&&!key.includes('currency') )
    .reduce((cur, key) => {
      return Object.assign(cur, { [key]: obj[key] });
    }, {});
};
