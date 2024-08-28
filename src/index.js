import React from "react";
import ReactDOM from "react-dom";

var heading;
var time = new Date().getHours();
const headingStyle = {
  color: "",
};

if (time < 12) {
  heading = "Good morning";
  headingStyle.color = "red";
} else {
  if (time < 18) {
    heading = "Good afternoon";
    headingStyle.color = "green";
  } else {
    heading = "Good evening";
    headingStyle.color = "blue";
  }
}

ReactDOM.render(
  <div>
    <h1 style={headingStyle} className="heading">
      {heading}
    </h1>
  </div>,
  document.getElementById("root")
);
//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
