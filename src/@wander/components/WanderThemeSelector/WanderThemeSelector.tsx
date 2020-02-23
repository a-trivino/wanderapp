import React, { useContext } from 'react';
import themeConfigurations from '../../../app/configs/themeConfigurations';
import { Button } from '@material-ui/core';
import { ThemeContext } from '../../../contexts/ThemeContext';

const WanderThemeSelector: React.FC = () => {
  var keys = Object.keys(themeConfigurations);
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
