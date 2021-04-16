/*
    You are given the following information, but you may prefer to do some research for yourself.

    1 Jan 1900 was a Monday.
    Thirty days has September,
    April, June and November.
    All the rest have thirty-one,
    Saving February alone,
    Which has twenty-eight, rain or shine.
    And on leap years, twenty-nine.
    A leap year occurs on any year evenly divisible by 4, but not on a century unless it is divisible by 400.
    How many Sundays fell on the first of the month during the twentieth century (1 Jan 1901 to 31 Dec 2000)?
*/

class FirstSundayCalculator {
    constructor(fromYear, toYear) {
        this.day1_1900 = 1; //1 Jan 1900 was a Monday
        this.yearStart = 1900;
        this.actualYear = 1900;
        this.fromYear = fromYear;
        this.toYear = toYear;
    }

    count1rstSunday = () => {
        let firstDayOfMonth = this.day1_1900;
        let count = 0;
        for (let nbDaysInMonth of this.getDaysPerMonth()) {
            firstDayOfMonth = (firstDayOfMonth + nbDaysInMonth)%7;
            if (firstDayOfMonth === 0 && this.actualYear >= this.fromYear && this.actualYear <= this.toYear ) count++;
        }
        return count;
    }

    *getDaysPerMonth () {
        this.actualYear = this.yearStart;
        while (this.actualYear <= this.toYear) {
            yield 31;

            let isLeapYear = (this.actualYear % 4 === 0) && (this.actualYear % 100 != 0) || this.actualYear % 400 === 0;
            yield isLeapYear ? 29 : 28;
            yield 31;
            yield 30;
            yield 31;
            yield 30;
            yield 31;
            yield 31;
            yield 30;
            yield 31;
            yield 30;
            this.actualYear++; 
            yield 31; //will give the first day of january
        }
    }
}

function countingSundays(firstYear, lastYear) {
    return (new FirstSundayCalculator(firstYear, lastYear)).count1rstSunday();
}
  
console.log(countingSundays(1995, 2000));
