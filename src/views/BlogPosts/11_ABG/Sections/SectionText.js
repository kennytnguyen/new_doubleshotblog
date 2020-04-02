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
import scale from "assets/img/img/9_scale.jpg";
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
            Disclaimer
          </h3>
          <p>
            This piece of writing is a result of the observations I had growing up and my belief of how
            the label originated. It is by no means a source of truth but I am open to amicable <b>discussions</b>,
            not arguments.
          </p>
          <br />

          <h3 className={classes.title}>
            A Disconnect
          </h3>
          <p>
            I originally thought about writing this a year and a half ago but I put it off because I didn’t think much about the term 
            <i> ABG (Asian Baby Girl)</i>, until I kept seeing its proliferation in mainstream social media. 
            Second generation Asian women across the world in Australia, Canada, Europe, New York, etc. began labeling each other 
            as “ABGs” as a form of self-flattery because they are able to exhibit qualities that don’t adhere to the 
            typical Asian stereotypes of being an educationally-driven nerd, a passive introvert, or a well-behaved homebody. 
            Whereas the prevalent and informal exemplification of an ABG is someone that isn’t <i>“wholesome”</i> and 
            prioritizes fun, is physically expressive, and likes to spend time wylin’ outside the home. 
            Personally, I don’t have a problem with the term or its modern adaptation but rather the usage of it. 
            It’s not apparent to me that people understand its origins, negative connotations, nor associated contexts. 
            Information is important because the lack of big picture contexts may attribute towards inconsistent behaviors, 
            viewpoints, arguments, and opinions.
          </p>

          <p>
            Proliferating the use of ABG undermines the cultural, socioeconomic, and environmental influences that <i> originally </i>
            contributed to the inception of the term in the first place. Children or emotionally immature individuals are more 
            impressionable and are suspect to being easily influenced. A common problem within many historically underprivileged 
            communities is that children under these circumstances don’t have role models or strong parental figures that are able 
            to teach and exemplify the differences between right and wrong. When we arrive at the subject of wealth and status, 
            it is very easy to find it appealing to both crave and chase.
          </p>
          <br />

          <h3 className={classes.title}>
            Origination and Associated Context
          </h3>
          <p>
            Wealth from a mainstream or social media perspective tends to be obnoxiously glamorous and expressive with fancy cars, 
            designer brands, and material objects <b><i>(flex culture)</i></b>. This causes those within the aforementioned communities to want 
            to escape the current lifestyle in pursuit of a more glamorous and supportive one -- but with limited direction. 
            A lack of role models in combination with influential peers that may partake in shady businesses (gangs, drug-dealing, etc.) 
            will drive impressionable individuals to prioritize short-term gains while sacrificing long-term goals.
          </p>

          <p>
            In relation to this pursuit of a glamorous lifestyle, people may turn to the easiest avenue(s) of disposable income. 
            Guys may join gangs to slang drugs while equivalently, <i> Asian Girls </i>will work for<i> underground strip clubs </i>
            disguised as<a href={"https://www.instagram.com/cafelu/?hl=en"}><b><i> Vietnamese Coffee Shops </i></b></a>(San Jose, Orange County, Eden Center). 
            The patrons of these businesses tend to be those who own, 
            run, push and pedal the questionable operations or err on the older, more “wealthy” end of the spectrum. 
            When the primary source of income for a girl within this coffee shop comes as bi-product of being<i> objectified </i>by men with money 
            and a means of offering financial support (sugar daddy), one might think to wear skimpy clothing, put on more makeup, and 
            find ways to superficially stand out (dye hair, boob job) to appeal to the physical eye. Now we have the end-product or result of an 
            <b><i>objectively unprogressive, shitty environment:</i></b>
            <ul>
              <li><b>A</b>sian</li>
              <li><b>B</b>aby (e.g. Sugar Baby)</li>
              <li><b>G</b>irl (female, minor, young adult, etc.)</li>
            </ul>
            Having witnessed and grown up in an area where I was able to see classmates that look like me (Vietnamese) partake in these pockets of 
            rather interesting activities. I was quick to remove and dissociate myself from the mildly negative 
            (open to interpretation) crowds that revolved around and prioritized “nice” cars financed on high interest rates and curvaceous car models. 
          </p>

          <p>
            The historical context of an ABG has been negative in nature due to its association to a
            <i> superficial, materialic, and party-centric<b> (ham choi) </b>lifestyle, </i>
            which is why I refrain from attaching this label to others. 
            But despite my understanding that the more modern interpretation of the ABG has changed and is an expected, 
            natural progression from its original connotation, I’m still a little bit surprised not many considered asking the question(s),
            <ul>
              <li>
                “Why do people draw so much meaning to this phrase or term?”
              </li>
              <li>
                “What is its core origin beyond the newly beloved hobby of <i>raving.</i>” 
                <a href={"https://dj.dancecult.net/index.php/dancecult/article/download/642/605/0"}> (Harvard Paper by Judy Soojin Park) </a>
              </li>
            </ul>
          </p>
          <br />

          <h3 className={classes.title}>
            Inconsistencies
          </h3>
          <p>
            Perhaps to my first point, maybe being the importance of being an ABG is to signify western assimilation by embodying the white, blonde <i>Cali-girl. </i>
            Although language and labels are expected to change with time and social progression, it’s still important to not completely detach the modern meaning from its origins. 
            Thus, witnessing the<i> inconsistent </i>thought process of how others choose to advocate for their favorite 
            social issues, self-righteous causes, and biased political agendas is an opposition and a near contradiction to their core principles of “empathy.” 
            This disparity is apparent when someone might care so much about a handful of social issues on Facebook and Twitter, but when challenged, 
            aren’t able to question or express skepticism to even their own ideals. 
            It is uncomfortable when my Asian peers do not even care to understand the origins of a phrase they liberally attach themselves to -- 
            despite its preceding negative connotation.
          </p>
          <p>
            When I hear or read of others continuing to label themselves or others as ABGs, 
            I personally think they’re insulting their friends by drawing the association between their appearance and using 
            physical attraction as a crutch for their livelihood, perceived social value, and lack of long-term goals. 
            This is a history lesson and rationale on why I’ll never call my attractive, intelligent, charismatic, and amazing Asian female friends,
            <i> ABGs. </i>
          </p>
          <br />
          
          <h3 className={classes.title}>
            Funny Remarks about ABGs
          </h3>
            
          <div className={classes.typo}>
            <div className={classes.note}></div>
            <Quote
              text="ABG ain't a look, it's a lifestyle."
              author=" fun gai"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}></div>
            <Quote
              text="Wholesome ABG? That's a fucking paradox"
              author=" fun guy"
            />
          </div>
          <div className={classes.typo}>
            <div className={classes.note}></div>
            <Quote
              text="I'm too poor to date an ABG"
              author=" not Kawhi"
            />
          </div>
        </GridItem>
      </GridContainer>
    </div>
  );
}
