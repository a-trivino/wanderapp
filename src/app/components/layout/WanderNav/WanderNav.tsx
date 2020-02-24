import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';

const WanderNav: React.FC = () => {
  return (
    <ul>
      <li>
        <Button to={'/project-structure'} variant='text' component={Link}>
          Project Structure
        </Button>
      </li>
      <li>
        <Button to={'/sandbox/change-route-dynamically'} variant='text' component={Link}>
          Theming - Change Theme Dynamically
        </Button>
      </li>
    </ul>
  );
};

export default WanderNav;
