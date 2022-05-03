import {extendTheme} from 'native-base';

export const theme = extendTheme({
  radii: {
    circle: 50,
  },
  colors: {
    primary: {
      5: '#f5f8f9',
      10: '#B6D8E2',
      25: '#86A7B1',
      50: '#99C8D6',
      100: '#5FA9BF',
      200: '#50A1B9',
      300: '#408AA0',
      400: '#367689',
      500: '#347183',
      600: '#2F6475',
      700: '#295766',
      800: '#234A58',
      900: '#1D3D49',
    },
    secondary: {
      50: '#FEEAAF',
      100: '#FDDA72',
      200: '#8BCBBD',
      300: '#8BCBBD',
      400: '#13C09B',
      500: '#8BCBBD',
      600: '#8BCBBD',
      700: '#C99703',
      800: '#B58803',
      900: '#8D6A02',
      overlay: '#FBBC0590',
    },
    surface: {
      200: '#F8F9FD',
      300: '#F0F3FA',
      400: '#E1E5EE',
      500: '#CFD5E1',
      600: '#B7BDCB',
    },
    text: {
      primary: '#0E2835',
      secondary: '#7E8699',
      gray: '#B7BDCB',
      note: '#CFD5E1',
      placeholder: '#7E8699',
      label: '#7E9094',
    },
  },
});
