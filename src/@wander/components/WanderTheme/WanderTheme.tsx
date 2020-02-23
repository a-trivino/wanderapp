import React, { useContext } from 'react';
import { ThemeProvider, Theme, createMuiTheme } from '@material-ui/core/styles';
import themeConfigurations from '../../../app/configs/themeConfigurations';
import { ThemeContext } from '../../../contexts/ThemeContext';

const WanderTheme: React.FC = (props) => {
  var themeContext = useContext(ThemeContext);

  const themeName = themeContext ? themeContext.theme : 'sunset';
  const theme: Theme = createMuiTheme(themeConfigurations[themeName]);

  console.log('WanderTheme');

  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default WanderTheme;
