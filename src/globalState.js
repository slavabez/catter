import {store} from 'react-easy-state';

export default store({
    isMenuOpen: false,
    currentLanguage: 'en',
    calorieTarget: 250,
    caloriesPerHalfCan: 150,
    caloriesPerHalfPack: 150,
    caloriesPerSpoon: 100
});