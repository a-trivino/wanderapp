import React from 'react';
import { Typography, Link } from '@material-ui/core';
const ChangeThemeDynamically = () => {
  return (
    <React.Fragment>
      <Typography variant='h4'>Changing Theme Dynamically</Typography>
      <p>
        On this page we explore how to change our app's theme dynamically. For this example, we will
        look at the following components in the Wander app:
      </p>
      <ul>
        <li>App</li>
        <li>WanderTheme</li>
        <li>WanderThemeSelector</li>
      </ul>
      <p>We will also be looking into:</p>
      <ul>
        <li>Material UI's createMuiTheme() and {`<ThemeProvider>`}</li>
        <li>useContext hook</li>
        <li>useState hook</li>
      </ul>
      <Typography variant='h5'>Theming using Material UI</Typography>
      <p>
        We will create a theme by using Material UI's{' '}
        <Link href='https://material-ui.com/customization/theming/#api' color='secondary'>
          createMuiTheme()
        </Link>{' '}
        function.
      </p>
      <pre>
        <code>
          {`
            const theme = createMuiTheme({
              "palette": {
                "type": "light",
                "primary": {
                  "light": "#FF908B",
                  "main": "#D0605E",
                  "dark": "#9B3134"
                },
                "secondary": {
                  "light": "#C76A1D",
                  "main": "#FF994C",
                  "dark": "#FFCA7B",
                  "contrastText": "#FFF"
                },
              "status": {
                "danger": "orange"
              }
            });
          `}
        </code>
      </pre>
      <p>
        Once we have a theme, we can then use the{' '}
        <Link
          href='https://material-ui.com/customization/theming/#theme-provider'
          color='secondary'>
          ThemeProvider
        </Link>{' '}
        component that enables us to apply themes to our application/component.
      </p>
      <pre>
        <code>
          {`
          <ThemeProvider theme={theme}>
            <Typography variant="h4" color="primary">Hello world</div>
          </ThemeProvider>`}
        </code>
      </pre>

      <p>
        With that in mind, we can do the following:
        <ol>
          <li>
            Create a configuration file that contains a JSON with the various themes that will be
            available to the app. [themeConfigurations.ts]
          </li>
          <li>
            Create a component which will be responsible for figuring out what theme to pass to the
            ThemeProvider. [WanderTheme.tsx]
          </li>
          <li>
            Update App.tsx to use the component we created in #2 (WanderTheme.tsx), so that the
            theme the user chooses is applied to the whole app.
          </li>
          <li>
            Create another component that will allow a user to choose a theme.
            [WanderThemeSelector.tsx]
          </li>
        </ol>
        <p>
          But the problem is, how will the WanderTheme component know which theme is selected by the
          user in WanderThemeSelector?
        </p>
      </p>
      <Typography variant='h5'>Enter the useContext and useState hooks</Typography>
      <p>
        First, we will need to use the useState hook to keep track of the theme selected by user
      </p>
      <p>Then, we will be using the useContext hook to share the information between components.</p>

      <p>To wire it up, let's:</p>

      <ol>
        <li>
          {' '}
          Create a ThemeContext (see ./contexts/ThemeContext.ts). This returns a context with a
          useState hook for theme and setTheme.
        </li>

        <li>
          In the App component, use the {`<ThemeContext.Provider>`}, passing to it a useState hook
          for theme and setTheme.
          <pre>
            <code>
              {`
  const [theme, setTheme] = useState(defaultTheme);
  

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <WanderTheme>
      .
      .
      </WanderTheme>
    </ThemeContext.Provider>
  )
            `}
            </code>
          </pre>
        </li>
        <li>
          In the WanderThemeSelector component, use the context to set the selected theme by using
          the setTheme method
        </li>
        <li>
          In the WanderTheme component, use the context to get the selected theme and use it as a
          parameter to createMuiTheme function to get the full Theme object which we can then pass
          to the ThemeProvider component
        </li>
      </ol>
    </React.Fragment>
  );
};

export default ChangeThemeDynamically;
