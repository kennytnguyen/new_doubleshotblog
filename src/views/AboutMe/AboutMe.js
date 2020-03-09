/*eslint-disable*/
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
// @material-ui/icons
import Hobby from "@material-ui/icons/LocalActivity";
import Work from "@material-ui/icons/Work";
import Music from "@material-ui/icons/MusicNote";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Badge from "components/Badge/Badge.js";
import Muted from "components/Typography/Muted.js";
import Parallax from "components/Parallax/Parallax.js";
import Clearfix from "components/Clearfix/Clearfix.js";
import Button from "components/CustomButtons/Button.js";

import christian from "assets/img/faces/christian.jpg";
import oluEletu from "assets/img/examples/olu-eletu.jpg";
import clemOnojeghuo from "assets/img/examples/clem-onojeghuo.jpg";
import cynthiaDelRio from "assets/img/examples/cynthia-del-rio.jpg";
import mariyaGeorgieva from "assets/img/examples/mariya-georgieva.jpg";
import clemOnojegaw from "assets/img/examples/clem-onojegaw.jpg";
import darrenColeshill from "assets/img/examples/darren-coleshill.jpg";
import avatar from "assets/img/faces/avatar.jpg";
import marc from "assets/img/faces/marc.jpg";
import kendall from "assets/img/faces/kendall.jpg";
import cardProfile2Square from "assets/img/faces/card-profile2-square.jpg";

import profilePageStyle from "assets/jss/material-kit-pro-react/views/profilePageStyle.js";

//My Shit
import SectionHeader from "./Sections/SectionHeader.js";
import SectionFooter from "./Sections/SectionFooter.js";

//Pics
import profilepicture from "assets/img/img/AboutMe_profilepicture.jpg";
import facebooklogo from "assets/img/img/AboutMe_facebooklogo.png";
import tplinklogo from "assets/img/img/AboutMe_tplink.png";
import efilogo from "assets/img/img/AboutMe_efi.png";
import hpelogo from "assets/img/img/AboutMe_hpe.png";

//Music
import chill from "assets/img/img/music_chill.jpg";
import driving from "assets/img/img/music_driving.jpg";
import fuckshit from "assets/img/img/music_fuckshit.jpg";
import tunessa from "assets/img/img/music_tunessa.jpg";
import pregame from "assets/img/img/music_pregame.jpg";
import beachbitch from "assets/img/img/music_beachbitch.jpg";


const useStyles = makeStyles(profilePageStyle);

export default function ProfilePage({ ...rest }) {
  React.useEffect(() => {
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
  });
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <SectionHeader />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div className={classes.profile}>
                <div>
                  <img src={profilepicture} alt="..." className={imageClasses} />
                </div>
                <div className={classes.name}>
                  <h3 className={classes.title}>Kenny Nguyen</h3>
                  <h6>Clown</h6>
                  <Button
                    justIcon
                    simple
                    color="youtube"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-youtube"} />
                  </Button>
                  {/* <Button
                    justIcon
                    simple
                    color="700"
                    className={classes.margin5}
                  >
                    <i className={classes.socials + " fab fa-spotify"} />
                  </Button> */}
                  <Button
                    justIcon
                    simple
                    color="linkedin"
                    className={classes.margin5}
                    href="http://www.linkedin.com/in/kennytnguyen"
                  >
                    <i className={classes.socials + " fab fa-linkedin"} />
                  </Button>
                </div>
              </div>
              {/* <div className={classes.follow}>
                <Tooltip
                  id="tooltip-top"
                  title="Follow this user"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <Button
                    justIcon
                    round
                    color="primary"
                    className={classes.followButton}
                  >
                    <Add className={classes.followIcon} />
                  </Button>
                </Tooltip>
              </div> */}
            </GridItem>
          </GridContainer>
          <div className={classNames(classes.description, classes.textCenter)}>
            <p>
              Bay Area native. University of Southern California graduate.
              {" "}
            </p>
          </div>
          <div className={classes.profileTabs}>
            <NavPills
              alignCenter
              color="info"
              tabs={[
                {
                  tabButton: "Professional",
                  tabIcon: Work,
                  tabContent: (
                    <GridContainer>
                      <GridItem
                        xs={12}
                        sm={12}
                        md={7}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Work Experience</h4>
                        <GridContainer className={classes.collections}>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + facebooklogo + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="gray"
                                  className={classes.badge}
                                >
                                  Present
                                </Badge>
                                <a href="#">
                                  <h2 className={classes.cardTitleWhite}>
                                    Technical Program Manager
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + tplinklogo + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="gray" className={classes.badge}>
                                  Summer 2017
                                </Badge>
                                <a href="#">
                                  <h2 className={classes.cardTitleWhite}>
                                    Product Manager
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + efilogo + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge color="gray" className={classes.badge}>
                                  Summer 2016
                                </Badge>
                                <a href="#">
                                  <h2 className={classes.cardTitleWhite}>
                                    Software Engineer
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                          <GridItem xs={12} sm={12} md={6}>
                            <Card
                              background
                              style={{
                                backgroundImage: "url(" + hpelogo + ")"
                              }}
                            >
                              <CardBody background className={classes.cardBody}>
                                <Badge
                                  color="gray"
                                  className={classes.badge}
                                >
                                  Summer 2015
                                </Badge>
                                <a href="#pablo">
                                  <h2 className={classes.cardTitleWhite}>
                                    Program Manager
                                  </h2>
                                </a>
                              </CardBody>
                            </Card>
                          </GridItem>
                        </GridContainer>
                      </GridItem>
                      {/* <GridItem
                        xs={12}
                        sm={12}
                        md={2}
                        className={classes.gridItem}
                      >
                        <h4 className={classes.title}>Stats</h4>
                        <ul className={classes.listUnstyled}>
                          <li>
                            <b>60</b> Products
                          </li>
                          <li>
                            <b>4</b> Collections
                          </li>
                          <li>
                            <b>331</b> Influencers
                          </li>
                          <li>
                            <b>1.2K</b> Likes
                          </li>
                        </ul>
                        <hr />
                        <h4 className={classes.title}>About this work</h4>
                        <p className={classes.description}>
                          French luxury footwear and fashion. The footwear has
                          incorporated shiny, red-lacquered soles that have
                          become his signature.
                        </p>
                        <hr />
                        <h4 className={classes.title}>Focus</h4>
                        <Badge color="primary">Footwear</Badge>
                        <Badge color="rose">Luxury</Badge>
                      </GridItem> */}
                    </GridContainer>
                  )
                },
                {
                  tabButton: "Music",
                  tabIcon: Music,
                  tabContent: (
                    <div>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={10}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="https://open.spotify.com/playlist/3UUB6N9Mg02mK2lTpuZJ39?si=4M5etP_OSmmgMMRU35QB5w">
                                    <img src={chill} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + chill + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Chill
                                  </h4>
                                  <Muted>
                                    <h6>~2000 Songs</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Sitting on your car, overlooking city lights, and talking to someone you like.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={10}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="https://open.spotify.com/playlist/6mD67g9RuKJHcleDmljIlj?si=Mj04EpWmRU6oo6oaP_C8_w">
                                    <img src={driving} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + driving + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Driving
                                  </h4>
                                  <Muted>
                                    <h6>~1700 Songs</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Probably singing, grooving, and pre-gaming in the car with your friends before a concert.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                      <GridContainer justify="center">
                        <GridItem
                          xs={12}
                          sm={12}
                          md={10}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="https://open.spotify.com/playlist/1Nb04rl5D97hXks1CzJw7o?si=giko5C-9Qjehu38wM3XveQ">
                                    <img src={fuckshit} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage: "url(" + fuckshit + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    Fuckshit
                                  </h4>
                                  <Muted>
                                    <h6>~400 Songs</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Bruh. It's hip-hop.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                        <GridItem
                          xs={12}
                          sm={12}
                          md={10}
                          className={classes.gridItem}
                        >
                          <Card profile plain className={classes.card}>
                            <GridContainer>
                              <GridItem xs={12} sm={12} md={5}>
                                <CardHeader image plain>
                                  <a href="https://open.spotify.com/playlist/0IflNcQnmivx1v0TDCqS9m?si=n976RnPMQkqRL6OhcND91Q">
                                    <img src={tunessa} alt="..." />
                                  </a>
                                  <div
                                    className={classes.coloredShadow}
                                    style={{
                                      backgroundImage:
                                        "url(" + tunessa + ")",
                                      opacity: "1"
                                    }}
                                  />
                                </CardHeader>
                              </GridItem>
                              <GridItem xs={12} sm={12} md={7}>
                                <CardBody plain>
                                  <h4 className={classes.cardTitle}>
                                    tunessa
                                  </h4>
                                  <Muted>
                                    <h6>~300 Songs</h6>
                                  </Muted>
                                  <p className={classes.description}>
                                    Night time sad boi drives.
                                  </p>
                                </CardBody>
                              </GridItem>
                            </GridContainer>
                          </Card>
                        </GridItem>
                      </GridContainer>
                    </div>
                  )
                // },
                // {
                //   tabButton: "Hobbies",
                //   tabIcon: Hobby,
                //   tabContent: (
                //     <GridContainer justify="center">
                //       <GridItem xs={12} sm={12} md={3}>
                //         <img
                //           alt="..."
                //           src={mariyaGeorgieva}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={clemOnojegaw}
                //           className={navImageClasses}
                //         />
                //       </GridItem>
                //       <GridItem xs={12} sm={12} md={3}>
                //         <img
                //           alt="..."
                //           src={clemOnojeghuo}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={oluEletu}
                //           className={navImageClasses}
                //         />
                //         <img
                //           alt="..."
                //           src={cynthiaDelRio}
                //           className={navImageClasses}
                //         />
                //       </GridItem>
                //     </GridContainer>
                //   )
                }
              ]}
            />
          </div>
          <Clearfix />
        </div>
      </div>
      <br></br>

      <SectionFooter />

    </div>
  );
}
