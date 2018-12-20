import range from './range'

function isLeapYear(y) {
    return (y % 4 === 0) && (y % 100 !== 0 || y % 400 === 0)
}

function getDateList(timestamp) {
    let date = new Date(timestamp)
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    return [year, month, day]
}

function getDays(start, end, year, month, polyfill, unit) {
    year = Number(year)
    month = Number(month)
    let endDay = null
    switch (month) {
        case 2:
            endDay = isLeapYear(year) ? 29 : 28;
            break
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            endDay = 31;
            break
        case 4:
        case 6:
        case 9:
        case 11:
        default:
            endDay = 30;
            break
    }
    let days = []
    if (start[0] === year && start[1] === month) {
        days = range(start[2], endDay, polyfill)
    } else if (end[0] === year && end[1] === month) {
        days = range(1, end[2], polyfill)
    } else {
        days = range(1, endDay, polyfill)
    }
    return days.map((day) => {
        return {
            code: day,
            name: day + (unit ? "日" : "")
        }
    })
};


const getMonthList = (start, end, year, polyfill) => {
    year = Number(year)
    if (start[0] === year) {
        return range(start[1], 12, polyfill)
    } else if (end[0] === year) {
        return range(1, end[1], polyfill)
    } else {
        return range(1, 12, polyfill)
    }
}

const getYearData = (start, end, polyfill, unit) => {
    let yearList = range(start[0], end[0], polyfill)
    return yearList.map(year => {
        return {
            code: year,
            name: year + (unit ? "年" : "")
        }
    })
}

const getMonthData = (start, end, polyfill, unit) => {
    let yearData = getYearData(start, end, polyfill, unit)
    return yearData.map(year => {
        let monthList = getMonthList(start, end, year.code, polyfill)
        year.children = monthList.map(month => {
            return {
                code: month,
                name: month + (unit ? "月" : "")
            }
        })
        return year
    })
}

const getDayData = (start, end, polyfill, unit) => {
    let yearData = getYearData(start, end, polyfill, unit)
    return yearData.map(year => {
        let monthList = getMonthList(start, end, year.code, polyfill)
        year.children = monthList.map(month => {
            return {
                code: month,
                name: month + (unit ? "月" : ""),
                children: getDays(start, end, year.code, month, polyfill, unit)
            }
        })
        return year
    })
}
export default (type, startDate, endDate, polyfill, unit) => {
    let date = []
    let start = getDateList(startDate)
    let end = getDateList(endDate)
    switch (type) {
        case 'year':
            date = getYearData(start, end, polyfill, unit)
            break;
        case 'month':
            date = getMonthData(start, end, polyfill, unit)
            break;
        case 'date':
        default:
            date = getDayData(start, end, polyfill, unit)
            break;
    }
    return date
}
