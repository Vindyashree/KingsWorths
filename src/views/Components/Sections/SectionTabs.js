import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
import Face from "@material-ui/icons/Face";
import Chat from "@material-ui/icons/Chat";
import Build from "@material-ui/icons/Build";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Events</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Wedding Event</small>
              </h3>
              <CustomTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Wedding",
                    tabIcon: Favorite,
                    tabContent: (
                      <p className={classes.textCenter}>
                        The Wedding Planners offers those ever-so-important services
                         related to weddings. In fact, we love all things weddings to 
                         such an extent that we take pleasure in managing all aspects 
                         in a bid to make your special day an extraordinary one that will 
                         be forever remembered. Looking to plan a multi-day celebration with 
                         elaborate and regal touches? Do you want your wedding to take place 
                         at a destination of your choice but you have no idea how to go about 
                         it? Or, maybe you just need some help to pop the question in the most
                          beautiful setting. We at King's Worth can handle it all!
                      </p>
                    )
                  }                  
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={6}>
              <h3>
                <small>Birthday Event</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="danger"
                tabs={[
                  {
                    tabName: "Birthday",
                    tabContent: (
                      <p className={classes.textCenter}>
                       Birthday Party Organisers for every budget, 
                       for children of every age with a guarantee that 
                       not as single moment would be dull. We will be your
                       partners in your child's birthday events making it
                       an extraordinary event that would impress one and all.
                       Being tech-savvy, we have an acute eye for looking up for the 
                       latest developments in the world and infuse them into your parties 
                       to make it an avant-garde event. Birthday parties have a special 
                       importance in everyone's life and King's Worth promise to make your  
                       birthday party distinctive and unforgettable.
                      </p>
                    )
                  },
                  
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
