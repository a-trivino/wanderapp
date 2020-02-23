import React from 'react';
import { Container, Grid } from '@material-ui/core';
import WanderNav from '../components/WanderNav/WanderNav';
import WanderThemeSelector from '../../components/WanderThemeSelector/WanderThemeSelector';
import WanderLayoutSelector from '../components/WanderLayoutSelector/WanderLayoutSelector';
import WanderHeader from '../components/WanderHeader/WanderHeader';

const Layout1: React.FC = (props) => {
  return (
    <React.Fragment>
      <WanderHeader></WanderHeader>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <h4>Navigation</h4>
            <WanderNav></WanderNav>
            <hr />
            <h4>Theme Selector</h4>
            <WanderThemeSelector></WanderThemeSelector>
            <hr />
            <h4>Layout Selector</h4>
            <WanderLayoutSelector></WanderLayoutSelector>
          </Grid>
          <Grid item xs={9}>
            {props.children}
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout1;
