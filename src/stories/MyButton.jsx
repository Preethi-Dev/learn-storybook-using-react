import React from "react";
import "./MyButton.css";

const stateStyle = {
  primary: "primary-btn",
  secondary: "secondary-btn",
  tertiary: "tertiary-btn",
};

/**
 * Primary UI component for user interaction
 */
const MyButton = ({ label, backgroundColor, state }) => {
  return (
    <button
      className={stateStyle[state]}
      style={backgroundColor && { backgroundColor }}
    >
      {label}
    </button>
  );
};

/** Own versions of button variant */
export default MyButton;
