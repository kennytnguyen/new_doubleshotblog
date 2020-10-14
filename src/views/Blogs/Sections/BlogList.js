import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import TrendingUp from "@material-ui/icons/TrendingUp";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Button from "components/CustomButtons/Button.js";

import blogsStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/blogsStyle.js";

import cardBlog4 from "assets/img/examples/card-blog4.jpg";
import office2 from "assets/img/office2.jpg";
import blog8 from "assets/img/examples/blog8.jpg";
import bg5 from "assets/img/img/11_abg.jpg";

import picture_abg from "assets/img/img/11_abg.jpg";
import fbparty_yir from "assets/img/img/yir_fbparty.jpg";
import picture_ama from "assets/img/ama_albums.jpg";
import picture_caliprop from "assets/img/img/12_caliprop.jpg";
import ny_sunset from "assets/img/img/13_sunset.jpg";
import picture_cooking from "assets/img/img/14_cooking.JPG";

const useStyles = makeStyles(blogsStyle);

export default function SectionBlogs({ ...rest }) {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      {/* Blogs START */}
      <div className={classes.blog}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem
              xs={12}
              sm={10}
              md={10}
              className={classes.mlAuto + " " + classes.mrAuto}
            >
              <h2 className={classes.title}>Latest Posts</h2>
              <br />
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/cooking">
                        <img src={picture_cooking} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_cooking})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_cooking})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                      <Danger>
                      <h6 className={classes.cardCategory}>
                        LIFE REFLECTION
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="/cooking">
                        Cooking
                      </a>
                    </h3>
                    <p className={classes.description}>
                      The fisrt thing I learned in COVID
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                      {" "}
                      - October 24, 2020
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/flaws">
                        <img src={ny_sunset} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${ny_sunset})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${ny_sunset})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                      <Danger>
                      <h6 className={classes.cardCategory}>
                        LIFE REFLECTION
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="/flaws">
                        A Short COVID Self-Reflection
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Some of my flaws.
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                      {" "}
                      - October 24, 2020
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/vote">
                        <img src={picture_caliprop} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_caliprop})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_caliprop})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                      <h6 className={classes.cardCategory}>
                        POLITICAL
                      </h6>
                    <h3 className={classes.cardTitle}>
                      <a href="/vote">
                        2020 California Propositions
                      </a>
                    </h3>
                    <p className={classes.description}>
                      What I'm voting for and why.
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                      {" "}
                      - October 24, 2020
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/abg">
                        <img src={picture_abg} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_abg})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_abg})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                      <h6 className={classes.cardCategory}>
                        RANDOM THOUGHTS
                      </h6>
                    <h3 className={classes.cardTitle}>
                      <a href="/abg">
                        Asian Baby Girl
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Historal Context and Negative Connotations
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                      {" "}
                      - April 1, 2020
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/2019Review">
                        <img src={fbparty_yir} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${fbparty_yir})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${fbparty_yir})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Danger>
                      <h6 className={classes.cardCategory}>
                        LIFE REFLECTION
                      </h6>
                    </Danger>
                    <h3 className={classes.cardTitle}>
                      <a href="/2019Review">
                        2019 Year-in-Review (Part 1)
                      </a>
                    </h3>
                    <p className={classes.description}>
                        Long awaited year-in-review for a rollercoaster
                        of emotional growth, degenerate activites, and
                        relationship building.
                      {/* <a href="/2019Review" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a> */}
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                      {" "}
                      - March 9, 2020
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="/ama">
                        <img src={picture_ama} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_ama})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${picture_ama})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Success>
                      <h6 className={classes.cardCategory}>ADVICE</h6>
                    </Success>
                    <h3 className={classes.cardTitle}>
                      <a href="/ama">
                        Ask Me Anything (Post-Grad)
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Life after graduation.
                    </p>
                    <p className={classes.author}>
                      by{" "}
                        <b>Kenny Nguyen</b>
                        {" "}
                        - May 7, 2019
                    </p>
                  </GridItem>
                </GridContainer>
              </Card>
              {/* <Card plain blog className={classes.card}>
                <GridContainer>
                  <GridItem xs={12} sm={4} md={4}>
                    <CardHeader image plain>
                      <a href="#pablito" onClick={e => e.preventDefault()}>
                        <img src={cardBlog4} alt="..." />
                      </a>
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                      <div
                        className={classes.coloredShadow}
                        style={{
                          backgroundImage: `url(${cardBlog4})`,
                          opacity: "1"
                        }}
                      />
                    </CardHeader>
                  </GridItem>
                  <GridItem xs={12} sm={8} md={8}>
                    <Info>
                      <h6 className={classes.cardCategory}>ENTERPRISE</h6>
                    </Info>
                    <h3 className={classes.cardTitle}>
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        Autodesk looks to future of 3D printing with Project
                        Escher
                      </a>
                    </h3>
                    <p className={classes.description}>
                      Like so many organizations these days, Autodesk is a
                      company in transition. It was until recently a traditional
                      boxed software company selling licenses. Today, it’s
                      moving to a subscription model. Yet its own business model
                      disruption is only part of the story — and…
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        {" "}
                        Read More{" "}
                      </a>
                    </p>
                    <p className={classes.author}>
                      by{" "}
                      <a href="#pablo" onClick={e => e.preventDefault()}>
                        <b>Mike Butcher</b>
                      </a>{" "}
                      , 2 days ago
                    </p>
                  </GridItem>
                </GridContainer>
              </Card> */}
            </GridItem>
          </GridContainer>
        </div>
      </div>
      {/* Blogs END */}
    </div>
  );
}
