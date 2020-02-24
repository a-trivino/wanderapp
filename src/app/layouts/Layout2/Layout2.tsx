import React from 'react';
import { Container, Grid } from '@material-ui/core';
import WanderHeader from '../../components/layout/WanderHeader/WanderHeader';
import WanderNav from '../../components/layout/WanderNav/WanderNav';
import WanderThemeSelector from '../../components/theme/WanderThemeSelector/WanderThemeSelector';
import WanderLayoutSelector from '../../components/layout/WanderLayoutSelector/WanderLayoutSelector';

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
