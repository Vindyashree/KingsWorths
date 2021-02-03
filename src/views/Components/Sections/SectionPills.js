import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Schedule from "@material-ui/icons/Schedule";
import List from "@material-ui/icons/List";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import NavPills from "components/NavPills/NavPills.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/pillsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionPills() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="navigation-pills">
          <div className={classes.title}>
            <h3>Packages</h3>
          </div>
         
          <GridContainer>
            <GridItem xs={12} sm={12} md={8} lg={6}>
            <h3>
              <small>Wedding Packages </small>
            </h3>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Delux",
                  //  tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Standard",
                   // tabIcon: Dashboard,
                   // tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Pocket Friendly",
                   // tabIcon: Dashboard,
                   // tabIcon: List,
                    tabContent: (
                      <span>
                        <p>
                          Collaboratively administrate empowered markets via
                          plug-and-play networks. Dynamically procrastinate B2C
                          users after installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                        <br />
                        <p>
                          Dramatically visualize customer directed convergence
                          without revolutionary ROI. Collaboratively
                          administrate empowered markets via plug-and-play
                          networks. Dynamically procrastinate B2C users after
                          installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={12} lg={6}>
            <h3>
              <small>Birthday Packages</small>
            </h3>
              <NavPills
                color="rose"
                horizontal={{
                  tabsGrid: { xs: 12, sm: 4, md: 4 },
                  contentGrid: { xs: 12, sm: 8, md: 8 }
                }}
                tabs={[
                  {
                    tabButton: "Standard",
                    //tabIcon: Dashboard,
                    tabContent: (
                      <span>
                        <p>
                         Ballon Decoration : The best way to lighten up a  
                         birthday party is by balloons. Multiple shapes and bright 
                         colors, enough to fill the atmosphere with brilliant laughs!                     
                                           
                        </p>
                        <br />
                        <p>
                        Balloon modelling and Balloon twisting
                        Is your beloved birthday just round the corner and 
                        are you looking for decorating the entire venue with a twist?
                        <ul>
                           <li>
                           Balloon Arches
                           </li>
                           <li>
                           Balloon Pillars / Balloon Columns
                           </li>
                           <li>
                           Balloon Centerpieces
                           </li>
                           <li>
                           Hellium Balloons
                           </li>
                         </ul>
                        </p>
                        <br />
                        <p>
                        High Quality Food Includes 
                        <ul>
                           <li>
                           Welcome drink 
                           </li>
                           <li>
                           5 types of starters(veg / non veg)
                           </li>
                           <li>
                           Main dish( veg / non veg)
                           </li>
                           <li>
                           Desserts(ice creams / salads )
                           </li>
                           <li>
                           Snacks 
                           </li>
                         </ul>

                        </p>
                      </span>
                    )
                  },
                  {
                    tabButton: "Pocket Friendly",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <p>
                          Efficiently unleash cross-media information without
                          cross-media value. Quickly maximize timely
                          deliverables for real-time schemas.
                        </p>
                        <br />
                        <p>
                          Dramatically maintain clicks-and-mortar solutions
                          without functional solutions. Dramatically visualize
                          customer directed convergence without revolutionary
                          ROI. Collaboratively administrate empowered markets
                          via plug-and-play networks. Dynamically procrastinate
                          B2C users after installed base benefits.
                        </p>
                      </span>
                    )
                  }
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
