import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Quote from "components/Typography/Quote.js";
// core components

import blog4 from "assets/img/examples/blog4.jpg";
import blog3 from "assets/img/examples/blog3.jpg";
import blog1 from "assets/img/examples/blog1.jpg";

import lineup_1 from "assets/img/img/4_uci.jpg";
import lineup_2 from "assets/img/img/4_ucr.jpg";
import lineup_3 from "assets/img/img/4_ucsb.jpg";
import lineup_4 from "assets/img/img/4_springfest_2015lineup.jpg";
import lineup_5 from "assets/img/img/4_csuf.jpg";


import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";

const useStyles = makeStyles(sectionTextStyle);

export default function SectionText() {
  const classes = useStyles();
  const imgClasses = classNames(
    classes.imgRaised,
    classes.imgRounded,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      
      <GridContainer justify="center">
        <GridItem xs={12} sm={8} md={8}>
          <p>
            Springfest 2015 was my first concert <b><i>ever</i></b> during my first semester at USC as a Spring Admit. 
            A little background on the type of person I was between my first day in college and Springfest, 
            I was an introvert that didn't go out to parties, concerts, or social gatherings to begin with. 
            So Springfest being my first event, I was already discouraged at the idea of going even if all my friends were going.
          </p>
          <p> 
            Thankfully, I went and it was one of the best decisions I ever made. I want people to experience the same thing I did when I went to 2015's Springfest. 
            That was my first concert ever and I had a blast. 
            2015's Springfest got me hooked onto live music and convinced me to go to Mountain View's BFD, which led to Hard Summer, which also led to Outside Lands. 
            Since then I've gone to a handful of festivals and small shows.
          </p>
          <br></br>

          <h3 className={classes.title}>
            Free Shit, Fun Shit, Music
          </h3>
          <p>
            <i>Just as a disclaimer the rest of my writing is pretty critical because it's about a subject that I'm relatively passionate about. I want everyone to experience fantastic live music so when that experience is ruined for others I get all types of riled up.</i>
          </p>
          <p>
            The primary objective of USC Concerts Committee is to bring the beauty of live performances and convince students that have never previously been to a concert before, 
            that seeing artists live is not the same as pressing play on your iPod or computer.
          </p>
          <p>
              To give a soft recap of my 2015 Springfest, Walla played first and they were pretty cool, 
              they were perfect for the Spring vibe and the early timeslot that they were given. 
              This was when we ran around to all the fun booths and grabbed free stuff. 
              By the time the sun was starting to set, Borns, Portugal the Man, and GTA got on stage each and 
              every single one of them destroyed their respective timeslots and gave students something to be more than satisfied with. 
              All of those artists were beyond fantastic for the 3 hours they played and it was obvious that whoever reached out to them, 
              knew that they would perform great live and give the students a show to remember.
          </p>
          <p> 
            I wish every show since Springfest 2015 was just as good if not better, but this has not been the case because the last good concert was almost 2 years ago. 
            I'm not saying that any of these artists that came in recent memory are bad, 
            I'm just saying if a committee whose purpose is to bring great live performances and introduce the beauty of live music to people who have never experienced it before, 
            USC Concerts Committee isn't doing a fantastic job at it.
          </p>
          <p>
              I'm seeing all these kids and people come out to USC's low energy concerts and see that they feel the urge to not come back and think they're all a waste of time. 
              But they're not, you just have the wrong people introducing it to you. 
              Just like anything new you try or retry, you'll always have to base it off the first experience you've had with it.
          </p>


          <Quote
            textClassName={classes.quoteText}
            text="“And thank you for turning my personal jean jacket into a couture piece.”"
            author="Kanye West, Producer."
          />
        </GridItem>
        <GridItem xs={12} sm={10} md={10} className={classes.section}>
          <GridContainer>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog4} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog3} alt="..." className={imgClasses} />
            </GridItem>
            <GridItem xs={12} sm={4} md={4}>
              <img src={blog1} alt="..." className={imgClasses} />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <br></br>
      <br></br>
    </div>
    
  );
}
