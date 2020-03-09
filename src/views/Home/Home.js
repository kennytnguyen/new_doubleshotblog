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
import SectionInterests from "./Sections/SectionInterests.js";

// sections for this page
import SectionTabs from "./Sections/SectionTabs.js";
import SectionPills from "./Sections/SectionPills.js";
import SectionFooter from "./Sections/SectionFooter.js";
import SectionCards from "./Sections/SectionCards.js";

import SectionCarousel from "./Sections/SectionCarousel.js";

import componentsStyle from "assets/jss/material-kit-pro-react/views/componentsStyle.js";

const useStyles = makeStyles(componentsStyle);

export default function Components() {
  // React.useEffect(() => {
  //   var href = window.location.href.substring(
  //     window.location.href.lastIndexOf("#") + 1
  //   );
  //   if (window.location.href.lastIndexOf("#") > 0) {
  //     document.getElementById(href).scrollIntoView();
  //   }
  //   window.addEventListener("scroll", updateView);
  //   updateView();
  //   return function cleanup() {
  //     window.removeEventListener("scroll", updateView);
  //   };
  // });
  // const easeInOutQuad = (t, b, c, d) => {
  //   t /= d / 2;
  //   if (t < 1) return (c / 2) * t * t + b;
  //   t--;
  //   return (-c / 2) * (t * (t - 2) - 1) + b;
  // };
  // const updateView = () => {
  //   var contentSections = document.getElementsByClassName("cd-section");
  //   var navigationItems = document
  //     .getElementById("cd-vertical-nav")
  //     .getElementsByTagName("a");

  //   for (let i = 0; i < contentSections.length; i++) {
  //     var activeSection =
  //       parseInt(navigationItems[i].getAttribute("data-number"), 10) - 1;
  //     if (
  //       contentSections[i].offsetTop -
  //         window.innerHeight / 2 +
  //         document.getElementById("main-panel").offsetTop <
  //         window.pageYOffset &&
  //       contentSections[i].offsetTop +
  //         contentSections[i].scrollHeight -
  //         window.innerHeight / 2 +
  //         document.getElementById("main-panel").offsetTop >
  //         window.pageYOffset
  //     ) {
  //       navigationItems[activeSection].classList.add("is-selected");
  //     } else {
  //       navigationItems[activeSection].classList.remove("is-selected");
  //     }
  //   }
  // };
  // const smoothScroll = target => {
  //   var targetScroll = document.getElementById(target);
  //   scrollTo(document.documentElement, targetScroll.offsetTop, 900);
  // };
  // const scrollTo = (element, to, duration) => {
  //   var start = element.scrollTop,
  //     change = to - start + document.getElementById("main-panel").offsetTop,
  //     currentTime = 0,
  //     increment = 20;

  //   var animateScroll = function() {
  //     currentTime += increment;
  //     var val = easeInOutQuad(currentTime, start, change, duration);
  //     element.scrollTop = val;
  //     if (currentTime < duration) {
  //       setTimeout(animateScroll, increment);
  //     }
  //   };
  //   animateScroll();
  // };
  const classes = useStyles();
  return (
    <div>
      <SectionHeader />
    
      <div
        className={classNames(classes.main, classes.mainRaised)}
        id="main-panel"
      >
        <br></br>
        <SectionCards />
        {/* <SectionInterests /> */}
        {/* <SectionTabs />
        <SectionPills />
        <SectionCarousel /> */}
        <br></br>
        <br></br>
      </div>
      {/* <nav id="cd-vertical-nav">
        <ul>
          <li>
            <a
              href="#blogs"
              data-number="1"
              className=""
              onClick={e => {
                e.preventDefault();
                smoothScroll("blogs");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Blogs</span>
            </a>
          </li>
          <li>
            <a
              href="#interests"
              data-number="2"
              className=""
              onClick={e => {
                e.preventDefault();
                smoothScroll("interests");
              }}
            >
              <span className="cd-dot" />
              <span className="cd-label">Interests</span>
            </a>
          </li>
        </ul>
      </nav> */}
      <br></br>
      <SectionFooter />
    </div>
  );
}
