function UseCalcDateDIff(date) {
    // parsing given date into miliseconds since year 1970
    const ParsedDate = Date.parse(date);
    // getting current date
    const CurrentDate = new Date();
    // getting miliseconds of new date since year 1970
    const ParsedCurrentDate = CurrentDate.getTime();
    // calculating difference, dividing by number of miliseconds in a day, and rounding up so end results is differnce in days.
    const NumOfDaysAgo = Math.round((ParsedCurrentDate - ParsedDate) / (1000 * 60 * 60 * 24));
    // conditionaly returning Date difference either us today, yestarday or num of days ago.
    if (NumOfDaysAgo === 0) {
        return 'Today';
    }
    if (NumOfDaysAgo === 1) {
        return 'Yesterday';
    }
    if (NumOfDaysAgo > 1) {
        return `${NumOfDaysAgo} day's ago`;
    }
}

export default UseCalcDateDIff;
