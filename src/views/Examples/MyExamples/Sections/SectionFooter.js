/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Mail from "@material-ui/icons/Mail";
import Favorite from "@material-ui/icons/Favorite";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Footer from "components/Footer/Footer.js";

import face1 from "assets/img/faces/card-profile6-square.jpg";
import face2 from "assets/img/faces/christian.jpg";
import face3 from "assets/img/faces/card-profile4-square.jpg";
import face4 from "assets/img/faces/card-profile1-square.jpg";
import face5 from "assets/img/faces/marc.jpg";
import face6 from "assets/img/faces/kendall.jpg";
import face7 from "assets/img/faces/card-profile5-square.jpg";
import face8 from "assets/img/faces/card-profile2-square.jpg";

import styles from "assets/jss/material-kit-pro-react/views/componentsSections/footerStyle.js";

const useStyles = makeStyles(styles);

export default function SectionFooter() {
  const classes = useStyles();
  return (
<Footer
          theme="dark"
          content={
            <div>
              <div className={classes.left}>
                <a
                  href="https://www.creative-tim.com/product/material-kit-pro-react?ref=mkpr-footer-components"
                  target="_blank"
                  className={classes.footerBrand}
                >
                  doubleshotblog
                </a>
              </div>
              <div className={classes.pullCenter}>
                <List className={classes.list}>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      target="_blank"
                      className={classes.block}
                    >
                      Blog
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      target="_blank"
                      className={classes.block}
                    >
                      Interests
                    </a>
                  </ListItem>
                  <ListItem className={classes.inlineBlock}>
                    <a
                      href=""
                      onClick={e => e.preventDefault()}
                      className={classes.block}
                    >
                      About Me
                    </a>
                  </ListItem>
                </List>
              </div>
              <div className={classes.rightLinks}>
                <ul>
                  <li>
                    <Button
                      href=""
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-youtube" />
                    </Button>
                  </li>
                  <li>
                    <Button
                      href=""
                      target="_blank"
                      color="white"
                      justIcon
                      simple
                    >
                      <i className="fab fa-instagram" />
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          }
        />
  );
}
