import React from "react";
// plugin that creates slider
//import Slider from "nouislider";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Radio from "@material-ui/core/Radio";
// import Switch from "@material-ui/core/Switch";
// @material-ui/icons
import Favorite from "@material-ui/icons/Favorite";
// import People from "@material-ui/icons/People";
// import Check from "@material-ui/icons/Check";
// import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
//import CustomLinearProgress from "components/CustomLinearProgress/CustomLinearProgress.js";
//import Paginations from "components/Pagination/Pagination.js";
//import Badge from "components/Badge/Badge.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionBasics() {
  const classes = useStyles();
  //const [checked, setChecked] = React.useState([24, 22]);
  // const [selectedEnabled, setSelectedEnabled] = React.useState("b");
  // const [checkedA, setCheckedA] = React.useState(true);
  // const [checkedB, setCheckedB] = React.useState(false);
  React.useEffect(() => {
  
   
    return function cleanup() {};
  });

  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>We Organize All Types Of Events</h2>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              With wide varitery of packages 
              <br />
              <small>Pick your Event</small>
            </h3>
          </div>
          <GridContainer justify="center">
            <GridItem sm={12} md={8}>
             
              <Button color="primary" round>
               <Favorite className={classes.icons} /> Wedding's
              </Button>
              <Button color="primary" round>
                 Birthday's
              </Button>
            
             
            </GridItem>
          </GridContainer>

    
        </div>
  

      </div>
    </div>
  );
}
