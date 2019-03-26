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
  ButtonHero,
  CardCustom,
  LogoBrand,
  CardFarmer
} from 'components'

import {
  Row,
  Col,
  Image
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
                  <GridContainer style={{
                    display: 'flex',
                    justifyContent: 'center'
                  }}>
                    <GridItem sm={3} md={3} lg={3}>
                      <ButtonHero
                        theme_tea
                        label='ดูสินค้า'
                        width='100%'
                        height='50px'
                      />
                    </GridItem>
                  </GridContainer>
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
                <CardFarmer
                  theme_standard
                  name='คุณ สมปปปปป'
                  image={require('assets/img/farmer/01.png')}
                  job='เกษตรกร'
                />
              </div>
            }
          />
          <BlockContent
            theme_cream
            title='สินค้าที่จัดจำหน่าย'
            content={
              <div>
                <GridContainer
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    paddingBottom: '54px',
                    paddingTop: '20px'
                  }}>
                  <GridItem md={2} >
                    <ButtonHero
                      theme_category
                      label='ผัก'
                      height='52px'
                      width='100%'
                    />
                  </GridItem>
                  <GridItem md={2} >
                    <ButtonHero
                      theme_category
                      label='ผลไม้'
                      height='52px'
                      width='100%'
                    />
                  </GridItem>
                  <GridItem md={2} >
                    <ButtonHero
                      theme_category
                      label='สมุนไพร'
                      height='52px'
                      width='100%'
                    />
                  </GridItem>
                  <GridItem md={2} >
                    <ButtonHero
                      theme_category
                      label='กาแฟ'
                      height='52px'
                      width='100%'
                    />
                  </GridItem>
                  <GridItem md={2} >
                    <ButtonHero
                      theme_category
                      label='โกโก้'
                      height='52px'
                      width='100%'
                    />
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                  <GridItem md={3}>
                    <CardCustom
                      theme_standard
                      title='มะเขือเทศ'
                    />
                  </GridItem>
                </GridContainer>
                <ButtonHero
                  theme_tea
                  label='ดูสินค้าเพิ่มเติม'
                  width='100%'
                  height='50px'
                />
              </div>
            }
          />
          <BlockContent
            theme_white
            content={
              <GridContainer>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo001.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo002.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo003.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo004.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo005.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo006.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo007.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo008.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo009.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo010.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo011.png")}
                  />
                </GridItem>
                <GridItem xs={6} sm={4} md={2}>
                  <LogoBrand
                    theme_standard
                    brand={require("assets/img/logo/logo012.png")}
                  />
                </GridItem>
              </GridContainer>
            }
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
