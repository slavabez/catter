import globalState from './globalState';

export default {
    en: {
        clickToExpand: 'Click to expand',
        changeSettings: 'Adjust values',
        caloriesPerDayTarget: 'Daily kCal target'
    },
    ru: {
        clickToExpand: 'Otkryt menyu',
        changeSettings: 'Pomenyat dannye',
        caloriesPerDayTarget: 'Cel kalorii v den'
    },
    getWord(word){
        return this[globalState.currentLanguage][word];
    }
};