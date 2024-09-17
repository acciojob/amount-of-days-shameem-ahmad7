//your JS code here. If required.
function daysOfAYear(year) {
  // Check if the year is within the valid range
  if (year < 1 || year > 9999) {
    return "Year must be between 1 and 9999";
  }

  // Check if the year is a leap year
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return 366;  // Leap year
  } else {
    return 365;  // Non-leap year
  }
}

// Example usage
console.log(daysOfAYear(2023));  // Output: 365 (Non-leap year)
console.log(daysOfAYear(2024));  // Output: 366 (Leap year)
console.log(daysOfAYear(1900));  // Output: 365 (Non-leap century year)
console.log(daysOfAYear(2000));  // Output: 366 (Leap century year)
console.log(daysOfAYear(10000)); // Output: "Year must be between 1 and 9999"
