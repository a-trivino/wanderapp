import React from 'react';
import { Container, Grid } from '@material-ui/core';
import WanderHeader from '../../components/layout/WanderHeader/WanderHeader';
import WanderNav from '../../components/layout/WanderNav/WanderNav';
import WanderThemeSelector from '../../components/theme/WanderThemeSelector/WanderThemeSelector';
import WanderLayoutSelector from '../../components/layout/WanderLayoutSelector/WanderLayoutSelector';

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
