import React, { useState } from 'react';
import './App.css';

import { ThemeContext } from './contexts/ThemeContext';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import ChangeThemeDynamically from './main/sandbox/ChangeThemeDynamically';
import WanderTheme from './components/theme/WanderTheme/WanderTheme';
import { LayoutContext } from './contexts/LayoutContext';
import WanderLayout from './components/layout/WanderLayout/WanderLayout';
import ProjectStructure from './main/project-structure/ProjectStructure';
import appConfig from './configurations/appConfig.json';

function App() {
  const defaultTheme =
    appConfig && appConfig.theme && appConfig.theme !== '' ? appConfig.theme : 'sunset';
  const defaultLayout =
    appConfig && appConfig.layout && appConfig.layout !== '' ? appConfig.layout : 'Layout1';

  const [theme, setTheme] = useState(defaultTheme);
  const [layout, setLayout] = useState(defaultLayout);
  console.log('app');

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <WanderTheme>
        <BrowserRouter>
          <LayoutContext.Provider value={{ layout, setLayout }}>
            <WanderLayout>
              <Switch>
                <Route exact path='/'>
                  <ProjectStructure />
                </Route>
                <Route path='/project-structure'>
                  <ProjectStructure />
                </Route>
                <Route path='/sandbox/change-route-dynamically'>
                  <ChangeThemeDynamically />
                </Route>
              </Switch>
            </WanderLayout>
          </LayoutContext.Provider>
        </BrowserRouter>
      </WanderTheme>
    </ThemeContext.Provider>
  );
}

export default App;
