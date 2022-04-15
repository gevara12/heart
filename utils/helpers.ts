export const addZeroBefore = (n) => {
  return (n < 10 ? '0' : '') + n;
};

export function isDateInArray(array, dateString) {
  let dateExists = false;
  let date = new Date(dateString);
  array.forEach(function(arrayDateString) {
    let arrayDate = new Date(arrayDateString);
    if(date.getTime() === arrayDate.getTime()){
      dateExists = true;
    }
  });
  return dateExists;
}
