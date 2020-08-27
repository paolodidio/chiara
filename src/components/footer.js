import React from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation'
import BottomNavigationAction from  '@material-ui/core/BottomNavigationAction'
import minion2 from '../photos/minion2.jpg';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './home.js';
import Gallery from './gallery.js';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});


export default function Footer(props){

      const classes = useStyles();
      const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    function TabPanel(props) {
      const { children, value, index, ...other } = props;

      return (
        <div
          role="tabpanel"
          hidden={value !== index}
          id={`simple-tabpanel-${index}`}
          aria-labelledby={`simple-tab-${index}`}
          {...other}
        >
          {value === index && (
            <Box p={3}>
              <Typography>{children}</Typography>
            </Box>
          )}
        </div>
      );
    }

    return(

<div>
    <AppBar position="static">
      <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
        <Tab label="Item One {...a11yProps(0)} "/>
        <Tab label="Item Two {...a11yProps(1)} "/>
        <Tab label="Item Three {...a11yProps(2)} "/>
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      Item One
      <Home/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
      <Gallery/>
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>


    <div>
        <BottomNavigation
        value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              showLabels
              className={classes.root}
        >
          <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>

        <div>
            {props.children}
        </div>
    </div>

</div>
    );

}