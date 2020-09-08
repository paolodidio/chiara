import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Home from './home.js';
import Gallery from './gallery.js';
import PhotoGallery from './photo-gallery.js';

export default function Navbar(props){

    const handleChange = (event, newValue) => {
        setValue(newValue);
      };

    const [value, setValue] = React.useState(0);

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
        <Tab label="Home {...a11yProps(0)} "/>
        <Tab label="Photos {...a11yProps(1)} "/>
        <Tab label="Videos {...a11yProps(2)} "/>
      </Tabs>
    </AppBar>
    <TabPanel value={value} index={0}>
      <Home/>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <PhotoGallery/>
    </TabPanel>
    <TabPanel value={value} index={2}>
      <Gallery/>
    </TabPanel>

</div>
    );

}