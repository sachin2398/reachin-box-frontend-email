import React from 'react';
import Navbar from '../../components/Navbar';
import { Grid } from '@mui/material';
import LeftSlide from '../../components/LeftSlide';
import MidPannel from '../../components/MidPannel';
import LeftSlideSecond from '../../components/LeftSlideSecond';
import RightPannel from '../../components/RightPannel';

const MainEmailPage = () => {
  return (
    <div>
      <Grid container>
        <Grid item xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={0.6}>
          <LeftSlide />
          
        </Grid>
        <Grid item xs={2} style={{ border: "2px solid red" }}>
         <LeftSlideSecond />
        </Grid>
        <Grid item xs={7.4} style={{ border: "2px solid green" }}>
           <MidPannel />
        </Grid>
        <Grid item xs={2} style={{ border: "2px solid blue" }}>
          <RightPannel />
        </Grid>
      </Grid>
    </div>
  );
};

export default MainEmailPage;
