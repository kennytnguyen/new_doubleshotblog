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
          <h3 className={classes.title}>
            tl;dr
          </h3>
          <p>
            Had the most amazing year of my life (thus far) with fun experiences, new friends, and lots of self-growth. 
            I was lucky to have learned a lot about myself, what I valued in close(r) relationships, and how to adapt towards mindset shifts. 
          </p>

          <h3 className={classes.title}>
            Disclaimer
          </h3>
          <p>
            This entire write-up is a self-reflective piece and how I currently feel at the time I wrote it. 
            People, everyone including you (the reader), me, and those around you are all subject and allowed to change 
            without negative perception of who they once were in the past. If we continue to judge people on who they were, 
            how can we wish to improve the world tomorrow.
          </p>

          <h3 className={classes.title}>
            Introduction
          </h3>
          <p>
            The last time I posted something was when I wrote an Ask Me Anything about being one year out of college. 
            When writing that post, it was kind of like a half-year check-in to see how much I’ve grown, learned, or even regressed. 
            Similarly, as 2019 winds down, or any year for that matter, I think it’s important to self-reflect and re-calibrate before the new year starts.
            <br></br><br></br>
            I feel like most people like to begin setting goals or expectations that they would hope to fulfill in the following year 
            (in this case 2020) without looking back to confront mistakes or express gratitude. I’m primarily writing about my 2019, 
            to share what I’ve learned, talk about the people I met, admit to the mistakes I made, and explain how all of these 
            lessons, friends, and missteps helped shape who I am, how I think, and what I want to change.
            <br></br><br></br>
            It took me a while (almost 2-3 months) to really sit down, process everything that has happened, and really find a 
            way to make sense of what I experienced, learned, or observed.
          </p>

          <h3 className={classes.title}>
            Quick Summary
          </h3>
          <p>
            First things first, let’s just get the degenerate activities out of the way. 
            I kicked off 2018 to 2019 at OMFG NYE! In San Diego but for the remainder of the year in 2019, I:

            <li>
              
            </li>
          </p>

          <h3 className={classes.title}>
            Expanding the Scale
          </h3>

          <h3 className={classes.title}>
            Meeting People (after 9PM)
          </h3>

          <h3 className={classes.title}>
            Being Different
          </h3>

          <h3 className={classes.title}>
            Being Alone
          </h3>

          <h3 className={classes.title}>
            Selfishness
          </h3>

          <h3 className={classes.title}>
            Security and Self-Confidence
          </h3>


          <p>
            
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more. We are here to make life better.
            <br />
            <br />
            And now I look and look around and there’s so many Kanyes I{"'"}ve
            been trying to figure out the bed design for the master bedroom at
            our Hidden Hills compound... and thank you for turning my personal
            jean jacket into a couture piece.
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
        <GridItem xs={12} sm={8} md={8}>
          <h3 className={classes.title}>Rest of the Story:</h3>
          <p>
            We are here to make life better. And now I look and look around and
            there’s so many Kanyes I{"'"}ve been trying to figure out the bed
            design for the master bedroom at our Hidden Hills compound... and
            thank you for turning my personal jean jacket into a couture piece.
            <br />I speak yell scream directly at the old guard on behalf of the
            future. daytime All respect prayers and love to Phife’s family Thank
            you for so much inspiration.
          </p>
          <p>
            Thank you Anna for the invite thank you to the whole Vogue team And
            I love you like Kanye loves Kanye Pand Pand Panda I{"'"}ve been
            trying to figure out the bed design for the master bedroom at our
            Hidden Hills compound...The Pablo pop up was almost a pop up of
            influence. All respect prayers and love to Phife’s family Thank you
            for so much inspiration daytime I love this new Ferg album! The Life
            of Pablo is now available for purchase I have a dream. Thank you to
            everybody who made The Life of Pablo the number 1 album in the
            world! I{"'"}m so proud of the nr #1 song in the country. Panda!
            Good music 2016!
          </p>
          <p>
            I love this new Ferg album! The Life of Pablo is now available for
            purchase I have a dream. Thank you to everybody who made The Life of
            Pablo the number 1 album in the world! I{"'"}m so proud of the nr #1
            song in the country. Panda! Good music 2016!
          </p>
        </GridItem>
      </GridContainer>
    </div>
  );
}
