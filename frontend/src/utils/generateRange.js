export const generateYearRange = (start) => {
  let currentYear = new Date().getFullYear();
  const length = currentYear - start + 1;
  const years = Array(length)
    .fill('')
    .map((value, index) => { return { name: currentYear - index }});
  return years;
};
 


export const generateRange = (start,end,step) => {
  const arrayLength = Math.floor((end - start) / step ) +1;
  const range = [...Array(arrayLength).keys()].map((x) => {return { name: x * step + start };});
  return range 
  };