/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
import HeaderLinks from "components/Header/HeaderLinks.js";

// my sections
import SectionHeader from "./Sections/SectionHeader.js";
import SectionInterestsList from "./Sections/InterestsList.js";

// sections for this page
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionFooter from "./Sections/SectionFooter.js";
import SectionCards from "./Sections/SectionCards.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.js";

const useStyles = makeStyles(componentsStyle);
export default function Components() {

  const classes = useStyles();
  return (
    <div>
      <SectionHeader />
    
      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="main-panel"
      >
        <br></br>
        <SectionInterestsList />
        <br></br>
        <br></br>
      </div>
      
      <SectionFooter />
    </div>
  );
}