// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Function that returns a function to multiply fare
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Function for doubling fare
const fareDoubler = createFareMultiplier(2);

// 6. Function for tripling fare
const fareTripler = createFareMultiplier(3);

// 7. Function to select drivers
const selectDifferentDrivers = function(drivers, fn) {
  return fn(drivers);
};
