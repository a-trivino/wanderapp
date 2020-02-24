import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import ThemeConfigurations from '../../../configurations/ThemeConfigurations';
import { ThemeContext } from '../../../contexts/ThemeContext';

const WanderThemeSelector: React.FC = () => {
  var keys = Object.keys(ThemeConfigurations);
  var themeContext = useContext(ThemeContext);
  return (
    <div>
      {keys.map((x) => {
        return (
          <div>
            <Button
              onClick={() => {
                themeContext && themeContext.setTheme(x);
              }}
              color='secondary'>
              {x}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default WanderThemeSelector;
