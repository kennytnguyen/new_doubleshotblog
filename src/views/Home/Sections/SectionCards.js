import React from "react";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Share from "@material-ui/icons/Share";
import ChatBubble from "@material-ui/icons/ChatBubble";
import Schedule from "@material-ui/icons/Schedule";
import TrendingUp from "@material-ui/icons/TrendingUp";
import Subject from "@material-ui/icons/Subject";
import WatchLater from "@material-ui/icons/WatchLater";
import People from "@material-ui/icons/People";
import Business from "@material-ui/icons/Business";
import Check from "@material-ui/icons/Check";
import Close from "@material-ui/icons/Close";
import Delete from "@material-ui/icons/Delete";
import Bookmark from "@material-ui/icons/Bookmark";
import Refresh from "@material-ui/icons/Refresh";
import Receipt from "@material-ui/icons/Receipt";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import CardAvatar from "components/Card/CardAvatar.js";
import Info from "components/Typography/Info.js";
import Danger from "components/Typography/Danger.js";
import Success from "components/Typography/Success.js";
import Warning from "components/Typography/Warning.js";
import Rose from "components/Typography/Rose.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/sectionCards.js";

import cardBlog5 from "assets/img/examples/card-blog5.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import picture_ama from "assets/img/ama_albums.jpg";
import fbparty_yir from "assets/img/yir_fbparty.jpg";
import picture_abg from "assets/img/img/11_abg.jpg";
import picture_caliprop from "assets/img/img/12_caliprop.jpg";

const useStyles = makeStyles(styles);

export default function SectionCards() {
  const [activeRotate1, setActiveRotate1] = React.useState("");
  const [activeRotate2, setActiveRotate2] = React.useState("");
  const [activeRotate3, setActiveRotate3] = React.useState("");
  const classes = useStyles();
  React.useEffect(() => {
    if (window) {
      window.addEventListener("resize", addStylesForRotatingCards);
    }
    addStylesForRotatingCards();
    return function cleanup() {
      if (window) {
        window.removeEventListener("resize", addStylesForRotatingCards);
      }
    };
  });
  const addStylesForRotatingCards = () => {
    var rotatingCards = document.getElementsByClassName(classes.cardRotate);
    for (let i = 0; i < rotatingCards.length; i++) {
      var rotatingCard = rotatingCards[i];
      var cardFront = rotatingCard.getElementsByClassName(classes.front)[0];
      var cardBack = rotatingCard.getElementsByClassName(classes.back)[0];
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      var rotatingWrapper = rotatingCard.parentElement;
      var cardWidth = rotatingCard.parentElement.offsetWidth;
      var cardHeight = rotatingCard.children[0].children[0].offsetHeight;
      rotatingWrapper.style.height = cardHeight + "px";
      rotatingWrapper.style["margin-bottom"] = 30 + "px";
      cardFront.style.height = "unset";
      cardFront.style.width = "unset";
      cardBack.style.height = "unset";
      cardBack.style.width = "unset";
      cardFront.style.height = cardHeight + 35 + "px";
      cardFront.style.width = cardWidth + "px";
      cardBack.style.height = cardHeight + 35 + "px";
      cardBack.style.width = cardWidth + "px";
    }
  };
  return (
    <div className="cd-section" id="blogs">
      <div className={classes.sectionGray}>
        <div>
          {/* PRODUCT CARDS START */}
          <div>
            <div className={classes.container}>
              <div className={classes.title}>
                <h2>Latest Blogs</h2>
              </div>
              <GridContainer>
              <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{ backgroundImage: `url(${picture_caliprop})` }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>Political</h6>
                      <a href="/abg">
                        <h3 className={classes.cardTitleWhite}>
                          2020 California Propositions
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        What I'm voting for and why.
                      </p>
                      <Button
                        href="/vote"
                        simple color="white"
                      >
                        <Subject />
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{ backgroundImage: `url(${picture_abg})` }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>Random Thoughts</h6>
                      <a href="/abg">
                        <h3 className={classes.cardTitleWhite}>
                          Asian Baby Girl
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Historal Context and Negative Connotations
                      </p>
                      <Button
                        href="/abg"
                        round color="white"
                      >
                        <Subject />
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{ backgroundImage: `url(${fbparty_yir})` }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>
                        LIFE REFLECTION
                      </h6>
                      <a href="/2019Review">
                        <h3 className={classes.cardTitleWhite}>
                          2019 Year-in-Review
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Long awaited year-in-review for a rollercoaster
                        of emotional growth, degenerate activites, and
                        relationship building.
                      </p>
                      <Button
                        href="/2019Review"
                        simple color="white"
                      >
                        <Subject />
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
                <GridItem xs={12} sm={6} md={6}>
                  <Card
                    background
                    style={{ backgroundImage: `url(${picture_ama})` }}
                  >
                    <CardBody background>
                      <h6 className={classes.cardCategoryWhite}>ADVICE</h6>
                      <a href="/ama">
                        <h3 className={classes.cardTitleWhite}>
                          Ask Me Anything
                        </h3>
                      </a>
                      <p className={classes.cardDescriptionWhite}>
                        Life after graduation.
                      </p>
                      <Button
                        href="/ama"
                        round color="white"
                      >
                        <Subject />
                        Read More
                      </Button>
                    </CardBody>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
          </div>
          {/* PRODUCT CARDS END */}
        </div>
      </div>
    </div>
  );
}
