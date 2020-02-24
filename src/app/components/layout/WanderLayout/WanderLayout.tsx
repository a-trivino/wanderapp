import React, { useContext } from 'react';
import { Paper } from '@material-ui/core';

import Layouts from '../../../layouts/Layouts';
import { LayoutContext } from '../../../contexts/LayoutContext';

const WanderLayout: React.FC = (props) => {
  const layouts = Layouts;
  const layoutContext = useContext(LayoutContext);

  const layoutName: string = layoutContext ? layoutContext.layout : 'Layout1';

  const Layout: React.FC = layouts[layoutName];
  return (
    <Paper>
      <Layout>{props.children}</Layout>
    </Paper>
  );
};

export default WanderLayout;
