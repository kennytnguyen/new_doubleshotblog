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

//my pictures
import int_festivals from "assets/img/img/int_festivals.jpg";
import music1 from "assets/img/img/music_spotify.jpg";
import sports1 from "assets/img/img/sports_football_2.jpg";
import sports2 from "assets/img/img/sports_football_4.jpg";

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
        <div id="morphingCards" className="cd-section">
          <div className={classes.container}>
            <div className={classes.title}>
              <h2>Interests</h2>
            </div>
            <GridContainer>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card background className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: `url(${int_festivals})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Music
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Festivals
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Description about music festivals.
                        </p>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: `url(${int_festivals})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Background</h5>
                        <p className={classes.cardDescriptionWhite}>
                          ... Description
                        </p>
                        {/* <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                        </div> */}
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card background className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: `url(${sports1})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Sports
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Football
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                          Something about playing football
                        </p>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: `url(${sports2})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Background</h5>
                        <p className={classes.cardDescriptionWhite}>
                        ... Description
                        </p>
                        {/* <div className={classes.textCenter}>
                          <Button round justIcon color="info">
                            <Subject />
                          </Button>
                          <Button round justIcon color="success">
                            <Icon>mode_edit</Icon>
                          </Button>
                        </div> */}
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
              <GridItem xs={12} sm={6} md={6} lg={4}>
                <div className={classes.rotatingCardContainer}>
                  <Card background className={classes.cardRotate}>
                    <div
                      className={
                        classes.front + " " + classes.wrapperBackground
                      }
                      style={{
                        backgroundImage: `url(${music1})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h6 className={classes.cardCategoryWhite}>
                          Music
                        </h6>
                        <a href="#pablo" onClick={e => e.preventDefault()}>
                          <h3 className={classes.cardTitleWhite}>
                            Song Discovery
                          </h3>
                        </a>
                        <p className={classes.cardDescriptionWhite}>
                           Something about finding music
                        </p>
                      </CardBody>
                    </div>
                    <div
                      className={classes.back + " " + classes.wrapperBackground}
                      style={{
                        backgroundImage: `url(${music1})`
                      }}
                    >
                      <CardBody background className={classes.cardBodyRotate}>
                        <h5 className={classes.cardTitleWhite}>Background</h5>
                        <p className={classes.cardDescriptionWhite}>
                        ... Description
                        </p>
                      </CardBody>
                    </div>
                  </Card>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        {/* MORPHING CARDS END */}
        </div>
  );
}
