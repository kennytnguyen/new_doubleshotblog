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



//Pictures
import food from "assets/img/img/14_food.jpg";
// import SectionCarousel from "./SectionCarousel.js";

import sectionTextStyle from "assets/jss/material-kit-pro-react/views/blogPostSections/sectionTextStyle.js";
// import { Grid } from "@material-ui/core";

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
          <h3 className={classes.title}>
            Why Cooking?
          </h3>
          <p>
            If any of you follow my Instagram (@kungflukerny) you’ll witness me trying my best to learn how to cook more.
            This was important to me because of three separate reasons.
            The first is related to my parents’ dynamic and expected responsibilities,
            the second has to do with not having food readily available for me from work,
            and the third is wanting to cook things that I wanted to eat but couldn’t find a local restaurant that made it up to my own standard.
          </p>
          <p>
            My first is reason is definitely the most important one to me. To give a little bit of background, my dad has been a stay-at-home dad
            since the 08’ recession and this shifted the family dynamic as during the more impressionable years of my life (12 y/o til’ now),
            my mom became the breadwinner in my household. I’ve always known she was a hard worker that always put her kids first but the more
            I grew up and learned about my parents’ history, the more I loved and respected my mom because of how much she put into ensuring
            that my my siblings and I would grow up to live happy lives.
          </p>
          <p>
            However, despite how hard my mom works, she still has to come home from a long day having to cook dinner for whoever is at home because
            my dad, despite being an objectively good father, is not a very good partner at the core. Seeing that my dad has the opportunity
            and capability to be a good partner by cooking dinner (possibly lunch), helping with errands, or being a pillar of support for my
            mom... but doesn’t take it upon himself fulfill these actions, really motivated me to learn to do the things I wish my dad would do
            for my mom. Although hearing and reading about my mom’s complaints can be tiring, they’re always valuable learning anecdotes that
            I won’t take for granted because I can absorb and take them to heart since they’ll help me be a better person in the future for
            anyone I care a lot about.
          </p>
          <p>
            The second reason... well... is pretty self-explanatory.
            I can’t really rely on work to feed me for 3 meals a day anymore so I have to take the initiative to learn how to cook.
            Nothing is worse than eating shitty food, so if I don’t want to eat shitty food and not always order from
            DoorDash or UberEats, I equivalently need to learn how to cook well. We love initiative.
          </p>
          <p>
            My last reason is that I could never really find good spicy wontons, mac & cheese, and tacos in the
            Bay Area that are both reasonably priced and tasty. This is what made me go out and say, “fine I’ll do it myself.”
          </p>
          <GridContainer>
            <GridItem>
            <h6>some food i make =P</h6>
              <img
                src={food}
                alt="and ate =P"
                className={classes.imgRounded + " " + classes.imgFluid}
              />
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      <br></br>
    </div>
  );
}
