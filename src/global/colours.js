import {useSelector} from 'react-redux';

export default function colours() {
  const Theme = useSelector(state => state.theme);
  let light = {
    primary: 'red',
    secodary: 'white',

    primaryGradient1: '#FCAEAE',
    primaryGradient2: '#FF8989',
    primaryGradient3: '#FF6666',
  };

  let dark = {
    primary: 'green',
    secodary: 'white',
    primaryGradient1: '#D2E3C8',
    primaryGradient2: '#B2C8BA',
    primaryGradient3: '#86A789',
  };
  let brown = {
    primary: '#ab8c67',
    secodary: 'white',
    primaryGradient1: '#f0d3af',
    primaryGradient2: '#f0d3af',
    primaryGradient3: '#ab8c67',
  };

  return Theme.data == 'DARK'
    ? dark
    : Theme.data == 'LIGHT'
    ? light
    : Theme.data == 'BROWN'
    ? brown
    : brown;
}
