

function daysInMonth(month, year) {
    const day = new Date(year, month, 0).getDate();
    return day;
  }
  
  function getDaysInYear(year) {
    let days = 0;
    
    for(let month = 1; month <= 12; month++) {
      days += daysInMonth(month, year);
    }
    
    return days;
  }

const getDays = getDaysInYear(2021);
console.log(getDays);
// 365

const getDays = getDaysInYear(2020);
console.log(getDays);
// 366




function getDayNumber(dateString) {
    const date = new Date(dateString);
    const day = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
    return day;
}

const result = getDayNumber("2023-01-12");
console.log(result);
// 12

const result = getDayNumber("2023-02-26");
console.log(result);
// was 57 MUST -> 26



function getQuarter(date) {
    const dayStr = date ? new Date(date) : new Date();
    const month = dayStr.getMonth() + 1;
    const quarter = Math.ceil(month / 3);
    const dayOfMonth = dayStr.getDate();

    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    
    const getMonthName = (monthNumber) => {
        return monthNames[monthNumber - 1];
    };

    const getRomanQuarter = (quarterNumber) => {
        const romanNumerals = ["I", "II", "III", "IV"];
        return romanNumerals[quarterNumber - 1];
    };

    const monthName = getMonthName(month);
    const romanQuarter = getRomanQuarter(quarter);

    return `${monthName} ${dayOfMonth} is ${romanQuarter} quarter`;
};


const result = getQuarter("2023-02-26");
console.log(result);

// Feb 26 is I quarter




function calcDateDiff(startDateStr, endDateStr) {
    const startDate = new Date(startDateStr);
    const endDate = new Date(endDateStr);

    const diffInMillis = Math.abs(endDate - startDate);

    const days = Math.floor(diffInMillis / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diffInMillis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diffInMillis % (1000 * 60 * 60)) / (1000 * 60));

    const year = endDate.getFullYear() - startDate.getFullYear();
    const months = endDate.getMonth() - startDate.getMonth();

    const resultParts = [];
    if (year > 0) {
        resultParts.push(year + (year === 1 ? ' year' : ' years'));
    }
    if (months > 0) {
        resultParts.push(months + (months === 1 ? ' month' : ' months'));
    }
    if (days > 0) {
        resultParts.push(days + (days === 1 ? ' day' : ' days'));
    }
    if (hours > 0) {
        resultParts.push(hours + (hours === 1 ? ' hour' : ' hours'));
    }
    if (minutes > 0) {
        resultParts.push(minutes + (minutes === 1 ? ' minute' : ' minutes'));
    }

    if (resultParts.length === 0) {
        return '0 minutes';
    }

    return resultParts.join(' ');
};

const result = calcDateDiff("2023-02-26 14:00:00", "2023-02-26 14:20:00");
console.log(result);
// "20 minutes"

const result = calcDateDiff("2023-02-26 14:00", "2023-02-26 15:30");
console.log(result);
// 1 hours 30 minutes

const result = calcDateDiff("2023-02-26 14:00", "2023-02-28 15:30");
console.log(result);
// 2 days

const result = calcDateDiff("2023-02-26 14:00", "2023-05-28 15:30");
console.log(result);
// 3 months

const result = calcDateDiff("2023-02-26 14:00", "2025-05-28 15:30");
console.log(result);
// 2 years
