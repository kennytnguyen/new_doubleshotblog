import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Parallax from "components/Parallax/Parallax.js";
import FormatAlignLeft from "@material-ui/icons/FormatAlignLeft";
// core components
import Header from "components/Header/Header.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import bg12 from "assets/img/transfer/beach2.jpg";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
      });
    const classes = useStyles();
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      // we've set the className to cd-section so we can make smooth scroll to it
      <div className="homepage" {...rest}>
        {/* HEADER 1 START */}
        <div>
          <Header
            absolute
            brand="doubleshotblog"
            color="transparent"
            fixed
            changeColorOnScroll={{
                height: 300,
                color: "default"
              }}
            links={
              <div className={classes.collapse}>
                <List className={classes.list + " " + classes.mlAuto}>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/"
                      className={classes.navLink}
                      color="transparent"
                    >
                      Home
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="/blogs"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Blog
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      Interests
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      href="#pablo"
                      className={classes.navLink}
                      onClick={e => e.preventDefault()}
                      color="transparent"
                    >
                      About Me
                    </Button>
                  </ListItem>
                </List>
                <List className={classes.list + " " + classes.mlAuto}>
                <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      href="https://www.youtube.com/channel/UCGotzaRFDfzRrGGkpxigShw"
                      target="_blank"
                      className={classes.navLink + " " + classes.navLinkJustIcon}
                    >
                      <i className={"fab fa-youtube"} />
                    </Button>
                  </ListItem>
                  <ListItem className={classes.listItem}>
                    <Button
                      color="transparent"
                      href="https://www.instagram.com/kernylistens"
                      target="_blank"
                      className={classes.navLink + " " + classes.navLinkJustIcon}
                    >
                      <i className={"fab fa-instagram"} />
                    </Button>
                  </ListItem>
                </List>
              </div>
            }
          />
          <Parallax image={require("assets/img/bg5.jpg")} filter="dark">
            <div className={classes.container}>
              <GridContainer justify="center">
                <GridItem md={8} className={classes.textCenter}>
                  <h1 className={classes.title}>
                    How We Built the Most Successful Castle Ever
                  </h1>
                  <h4 className={classes.subtitle}>
                    The last 48 hours of my life were total madness. This is what I
                    did.
                  </h4>
                  <br />
                  <Button color="rose" size="lg" round>
                    <FormatAlignLeft /> Read Article
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </Parallax>
        {/* HEADER 1 END */}
        </div>
    </div>
  );
}