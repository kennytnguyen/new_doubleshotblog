import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import carouselStyle from "assets/jss/material-kit-pro-react/views/componentsSections/carouselStyle.js";

import image1 from "assets/img/img/2_dad.JPG";
import image2 from "assets/img/img/2_flippedcar.JPG";

const useStyles = makeStyles(carouselStyle);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true
  };
  return (
    <div className={classes.section} id="carousel">
      <div className={classes.container}>
        <GridContainer>
          <GridItem xs={12} sm={10} md={8} className={classes.marginAuto}>
            <Card>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="Dad" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      Dad. Sadly didn't get a picture together.
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Flipped Car"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      Ay lmao
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
