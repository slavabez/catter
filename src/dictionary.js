import globalState from './globalState';

export default {
    en: {
        clickToExpand: '>',
        changeSettings: 'Adjust values',
        caloriesPerDayTarget: 'Daily kCal target',
        caloriesPerCan: 'Calories per 1/2 can of cat food',
        caloriesPerPack: 'Calories per 1/2 pack of cat food',
        caloriesPerSpoon: 'Calories per spoon of dry cat food',
        appName: 'Cat food calculator',
        addDryFood: 'Add 1/2 spoon of dry cat food',
        addCanFood: 'Add 1/2 can of cat food',
        addPackedFood: 'Add 1/2 a pack of cat food',
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        dinner: 'Dinner'
    },
    ru: {
        clickToExpand: '>',
        changeSettings: 'Pomenyat dannye',
        caloriesPerDayTarget: 'Cel kalorii v den',
        caloriesPerCan: 'Kalorii v pol banki edy',
        caloriesPerPack: 'Kalorii v pol pachki edy',
        caloriesPerSpoon: 'kalorii v lozhke suhoi edy',
        appName: 'Kalkulyator edu dlya koshki',
        addDryFood: 'Add 1/2 spoon of dry food',
        addCanFood: '',
        addPackedFood: '',
        breakfast: 'Breakfast',
        lunch: 'Lunch',
        dinner: 'Dinner'
    },
    getWord(word){
        return this[globalState.currentLanguage][word];
    }
};