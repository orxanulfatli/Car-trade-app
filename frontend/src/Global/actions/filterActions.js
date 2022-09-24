// const filterCars = (cars, payload) => {
//   return cars?.filter((car) => {
//     //it is implementation - every() method of array
//     //create list and push into it bolean value
//     //if all items in list true return true
//     //if one or more element false return false
//     //it is same with every
//     //The every() method executes a function for each array element.
//     //The every() method returns true if the function returns true for all elements.
//     //The every() method returns false if the function returns false for one element.
//     // let control = [];

//     // for (let name in payload) {
//     //   if (!payload[name]) {
//     //     control.push(true);
//     //   }
//     //   debugger;
//     //   if (
//     //     payload[name] &&
//     //     !name.includes("min") &&
//     // !name.includes("max") &&
//     //     !name === "currency"
//     //   ) {
//     //     control.push(payload[name] === car[name]);
//     //   }
//     // }
//     // return !control.includes(false);

// with every method
//     return Object.entries(payload).every(([key, value]) => {
//       let condition =
//         value &&
//         !key.includes("min") &&
//         !key.includes("max") &&
//         !key.includes("currency");
//       if (condition) {
//         return car[key] === value;
//       }
//       return true;
//     });
//   });
// };

export const filterCarsAC = (payload) => {
  return { type: "FILTER_CARS", payload };
};
