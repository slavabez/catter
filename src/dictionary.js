import globalState from './globalState';

export default {
    en: {
        clickToExpand: 'Click to expand',
        changeSettings: 'Adjust values',
        caloriesPerDayTarget: 'Daily kCal target',
        caloriesPerCan: 'Calories per 1/2 can of cat food',
        caloriesPerPack: 'Calories per 1/2 pack of cat food',
        caloriesPerSpoon: 'Calories per spoon of dry cat food'
    },
    ru: {
        clickToExpand: 'Otkryt menyu',
        changeSettings: 'Pomenyat dannye',
        caloriesPerDayTarget: 'Cel kalorii v den',
        caloriesPerCan: 'Kalorii v pol banki edy',
        caloriesPerPack: 'Kalorii v pol pachki edy',
        caloriesPerSpoon: 'kalorii v lozhke suhoi edy'
    },
    getWord(word){
        return this[globalState.currentLanguage][word];
    }
};