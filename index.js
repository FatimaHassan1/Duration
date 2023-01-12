var Duration = require("duration");

const testing = async (req, res) => {
  try {
    var duration = new Duration(
      new Date(2022, 12, 12),
      new Date(2022, 11, 11, 3, 23, 8, 456)
    );

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
    console.log(
      "Custom string representation: ",
      duration.toString("H: %Hs m: %M")
    );
  } catch (e) {
    RENDER_BAD_REQUEST(res, e);
  }
};

module.exports = testing;
