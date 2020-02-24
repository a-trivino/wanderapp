import { red } from '@material-ui/core/colors';

const ThemeConfigurations: any = {
  sunset: {
    palette: {
      type: 'light',
      primary: {
        light: '#f9683a',
        main: '#bf360c',
        dark: '#870000',
        contrastText: '#e0e0e0'
      },
      secondary: {
        light: '#a7c0cd',
        main: '#78909c',
        dark: '#4b636e',
        contrastText: '#fafafa'
      },
      error: red
    },
    status: {
      danger: 'orange'
    }
  },
  jungle: {
    palette: {
      type: 'light',
      primary: {
        light: '#4c8c4a',
        main: '#1b5e20',
        dark: '#d7ccc8'
      },
      secondary: {
        light: '#4fb3bf',
        main: '#00838f',
        dark: '#005662',
        contrastText: '#cfd8dc'
      },
      error: red
    },
    status: {
      danger: 'orange'
    }
  },
  beach: {
    palette: {
      type: 'light',
      primary: {
        light: '#5ddef4',
        main: '#00acc1',
        dark: '#007c91',
        contrastText: '#fafafa'
      },
      secondary: {
        light: '#ffd95a',
        main: '#f9a825',
        dark: '#c17900',
        contrastText: '#607d8b'
      }
    }
  },
  techpark: {
    palette: {
      type: 'light',
      primary: {
        light: '#819ca9',
        main: '#546e7a',
        dark: '#29434e',
        contrastText: '#ffffff'
      },
      secondary: {
        light: '#62efff',
        main: '#00bcd4',
        dark: '#008ba3',
        contrastText: '#e0e0e0'
      }
    }
  },
  sweetHues: {
    palette: {
      type: 'light',
      primary: {
        light: '#D5C1EB',
        main: '#A391B9',
        dark: '#746389',
        contrastText: '#FFF'
      },
      secondary: {
        light: '#90AFD4',
        main: '#6080A3',
        dark: '#325474'
      }
    }
  },
  deepOcean: {
    palette: {
      type: 'dark',
      primary: {
        light: '#8F53E7',
        main: '#5A24B4',
        dark: '#1E0083'
      },
      secondary: {
        light: '#FF61FF',
        main: '#FE00E9',
        dark: '#C600B6',
        contrastText: '#FFF'
      }
    }
  },
  slate: {
    palette: {
      type: 'dark',
      primary: {
        light: '#86FFF7',
        main: '#4ECDC4',
        dark: '#009B94'
      },
      secondary: {
        light: '#FF9D99',
        main: '#FF6B6B',
        dark: '#C73840',
        contrastText: '#FFF'
      }
    }
  }
};

export default ThemeConfigurations;
