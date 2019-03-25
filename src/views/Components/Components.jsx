import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionBasics from "./Sections/SectionBasics.jsx";
import SectionNavbars from "./Sections/SectionNavbars.jsx";
import SectionTabs from "./Sections/SectionTabs.jsx";
import SectionPills from "./Sections/SectionPills.jsx";
import SectionNotifications from "./Sections/SectionNotifications.jsx";
import SectionTypography from "./Sections/SectionTypography.jsx";
import SectionJavascript from "./Sections/SectionJavascript.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import SectionCompletedExamples from "./Sections/SectionCompletedExamples.jsx";
import SectionLogin from "./Sections/SectionLogin.jsx";
import SectionExamples from "./Sections/SectionExamples.jsx";
import SectionDownload from "./Sections/SectionDownload.jsx";

import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import {
  BlockIndex,
  BlockContent,
  ButtonHero
} from 'components'

import {
  Row,
  Col
} from 'react-bootstrap'

class Components extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="HAZE FREE"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg8.png")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                  <h2 className={classes.title}>การร่วมมือกันของเกษตรกร <div>เพื่อลดหมอกควันภาคเหนือ</div></h2>
                  <ButtonHero
                    theme_tea
                    label='ดูสินค้า'
                    width='30%'
                    height='50px'
                  />
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          {/* <SectionBasics />
          <SectionNavbars />
          <SectionTabs />
          <SectionPills />
          <SectionNotifications />
          <SectionTypography />
          <SectionJavascript />
          <SectionCarousel />
          <SectionCompletedExamples />
          <SectionLogin />
          <GridItem md={12} className={classes.textCenter}>
            <Link to={"/login-page"} className={classes.link}>
              <Button color="primary" size="lg" simple>
                View Login Page
              </Button>
            </Link>
          </GridItem>
          <SectionExamples />
          <SectionDownload /> */}

          <BlockIndex
            theme_standard
          />
          <BlockContent
            theme_black
            title='เกษตรกรที่เข้าร่วม'
            content={
              <div>
                ssaadasd
              </div>
            }
          />
          <BlockContent
            theme_cream
            title='สินค้าที่จัดจำหน่าย'
            content={
              <GridContainer>
                <GridItem md={2}>
                  <ButtonHero
                    theme_category
                    label='ผัก'
                    height='52px'
                    width='100%'
                  />
                </GridItem>
                <GridItem md={2}>
                  <ButtonHero
                    theme_category
                    label='ผลไม้'
                    height='52px'
                    width='100%'
                  />
                </GridItem>
                <GridItem md={2}>
                  <ButtonHero
                    theme_category
                    label='สมุนไพร'
                    height='52px'
                    width='100%'
                  />
                </GridItem>
                <GridItem md={2}>
                  <ButtonHero
                    theme_category
                    label='กาแฟ'
                    height='52px'
                    width='100%'
                  />
                </GridItem>
                <GridItem md={2}>
                  <ButtonHero
                    theme_category
                    label='โกโก้'
                    height='52px'
                    width='100%'
                  />
                </GridItem>
              </GridContainer>
            }
          />
          <BlockContent
            theme_white
            content={
              <div>

                logo
              </div>
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
