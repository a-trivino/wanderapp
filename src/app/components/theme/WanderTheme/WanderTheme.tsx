import React, { useContext } from 'react';
import { ThemeProvider, Theme, createMuiTheme } from '@material-ui/core/styles';
import ThemeConfigurations from '../../../configurations/ThemeConfigurations';
import { ThemeContext } from '../../../contexts/ThemeContext';

const WanderTheme: React.FC = (props) => {
  const themeContext = useContext(ThemeContext);

  const themeName = themeContext ? themeContext.theme : 'sunset';
  const theTheme: Theme = createMuiTheme(ThemeConfigurations[themeName]);

  console.log('WanderTheme');

  return <ThemeProvider theme={theTheme}>{props.children}</ThemeProvider>;
};

export default WanderTheme;
