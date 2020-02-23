import React from 'react';
import Layout1 from './Layout1/Layout1';
import Layout2 from './Layout2/Layout2';

const Layouts: { [key: string]: React.FC } = {
  Layout1: Layout1,
  Layout2: Layout2
};

export default Layouts;
