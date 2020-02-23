import React from 'react';
import { Container, Grid } from '@material-ui/core';
import WanderNav from '../components/WanderNav/WanderNav';
import WanderThemeSelector from '../../components/WanderThemeSelector/WanderThemeSelector';
import WanderLayoutSelector from '../components/WanderLayoutSelector/WanderLayoutSelector';
import WanderHeader from '../components/WanderHeader/WanderHeader';

const Layout2: React.FC = (props) => {
  return (
    <React.Fragment>
      <WanderHeader></WanderHeader>
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <h4>Navigation</h4>
            <WanderNav></WanderNav>
          </Grid>
          <Grid item xs={6}>
            {props.children}
          </Grid>
          <Grid item xs={3}>
            <h4>Theme Selector</h4>
            <WanderThemeSelector></WanderThemeSelector>
            <hr />
            <WanderLayoutSelector></WanderLayoutSelector>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Layout2;
