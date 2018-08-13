import React from "react";
import classes from "./NavigationItems.css";
import NaviationItem from "./NavigationItem/NavigationItem";

const navigationItems = props => {
  return (
    <ul className={classes.NavigationItems}>
      <NaviationItem link="/" active={true}>
        Burger Builder
      </NaviationItem>
      <NaviationItem link="/" active={false}>
        Check Out
      </NaviationItem>
    </ul>
  );
};

export default navigationItems;
