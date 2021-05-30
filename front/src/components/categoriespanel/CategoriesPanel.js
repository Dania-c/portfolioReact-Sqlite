import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import './categoriespanel.css';
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    //width: '100%',
    backgroundColor: theme.palette.background.paper,
    // marginLeft: '30%',
    marginBottom: '0%',
    padding: '0%',
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [categoryState, setCategoryState] = useState([]);
  const history = useHistory();


  const handleChange = (event, newValue) => {
    setValue(newValue);
    // console.log({newValue})
  };
  
  useEffect(() => {
    // console.log("try to fetch categ")
    fetch(`//localhost:8000/categories`)

      .then(res => {
        return res.json();
      })
      .then(data => {
        setCategoryState(data.result);
        // console.log(data.result);
      })

  }, [])
  return (
    <div className="nav">
      <div className={classes.root}>
        <AppBar position="static" color="default"  >
          <Tabs
            // fullWidth={true}
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
            aria-label="scrollable force tabs example"
          >
           
            {categoryState.map(({ id, imageURl, description }) => {
              return (
                <Tab label={description} icon={<img src={imageURl} alt='' />} {...a11yProps({ id })}  onClick={() => {
                  history.push(`/category_photospage/${id}`);
                  // console.log({id})
                }} />

              )
            })}
           
          </Tabs>
         
        </AppBar>
        
      </div>
    </div>
  );
}