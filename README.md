# Duration



Installation
npm install duration



In Api

var Duration = require("duration");

var duration = new Duration(new Date(2000, 6, 7), new Date(2010, 8, 13, 3, 23, 8, 456));

console.log("Years: ", duration.years);
console.log("Months: ", duration.months);
console.log("Days: ", duration.days);
console.log("Hours: ", duration.hours);
console.log("Minutes: ", duration.minutes);
console.log("Seconds: ", duration.seconds);
console.log("Milliseconds: ", duration.milliseconds);

console.log("Trailing months: ", duration.month);
console.log("Trailing days: ", duration.day);
console.log("Trailing hours: ", duration.hour);
console.log("Trailing minutes: ", duration.minute);
console.log("Trailing seconds: ", duration.second);
console.log("Trailing milliseconds: ", duration.millisecond);

console.log("Default string representation: ", duration.toString());
console.log("Alternative string representation: ", duration.toString(1));
console.log("Custom string representation: ", duration.toString("H: %Hs m: %M"));





Both a function Object() {} and a factory function are available for usage with the main module.
JavaScript Date objects are anticipated for from and to. to is optional and defaults to the current time if not given.

years
Returns the complete duration in years.

months
returns the entire duration in months.

days
entire days of the length are returned in days.

hours
hours gives back the entire length in hours.

seconds
returns the entire duration in seconds.

minutes
returns the entire duration in minutes.

milliseconds
returns the duration in milliseconds
