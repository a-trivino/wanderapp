import React, { useState } from 'react';
import './App.css';

import { ThemeContext } from '../contexts/ThemeContext';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import WanderTheme from '../@wander/components/WanderTheme/WanderTheme';
import ChangeThemeDynamically from './main/sandbox/ChangeThemeDynamically';
import { LayoutContext } from '../contexts/LayoutContext';
import WanderLayout from '../@wander/layouts/components/WanderLayout/WanderLayout';
import ProjectStructure from './main/project-structure/ProjectStructure';
import Prerequisites from './main/prerequisites/Prerequisites';

function App() {
  const [theme, setTheme] = useState('default');
  const [layout, setLayout] = useState('Layout2');
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
