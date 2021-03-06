var calendar = {
    // 定义的一些中文字符、术语
    weekStringZH_CNThree: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
    weekStringZH_CNTwo: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
    // 农历
    lunarString: ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
        '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一',
        '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
    ],
    // 天干
    heavenlyStems: ["甲", "乙", "丙", "丁", "戊", "己", "庚", "辛", "壬", "癸"],
    //地支
    earthlyBranches: ["子", "丑", "寅", "卯", "辰", "巳", "午", "未", "申", "酉", "戌", "亥"],
    // 生肖表
    animals: ["鼠", "牛", "虎", "兔", "龙", "蛇", "马", "羊", "猴", "鸡", "狗", "猪"],
    // 24节气
    solarTerms: ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满",
        "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"
    ],

    // 获取当前时间
    getDate: function() {
        var today = new Date();
        var fullYear = today.getFullYear();
        var month = today.getMonth() + 1;
        var date = today.getDate();
        var day = this.weekStringZH_CNThree[today.getDay()];
        var todayDate = fullYear + "年" + month + "月" + date + "日" + day;
        console.log("今天日期是：" + todayDate);
        return todayDate;
    },
    // 获取当前月份，不知道冗余不冗余
    getMonth: function() {
        var today = new Date();
        var month = today.getMonth() + 1;
        return month;
    },
    // 获取当前月份，不知道冗余不冗余
    getYear: function() {
        var today = new Date();
        var year = today.getFullYear();
        return year;
    },
    // 生成当前月份
    getDateContent: function(year, month) {
        var j;
        var dayChosen = new Date(year, month - 1, 1);
        var weekIndex = dayChosen.getDay();

        var dayChosenBefore = new Date(dayChosen.valueOf() - 24 * 60 * 60 * 1000 * weekIndex);
        // 删除子节点
        for (i = dateContent.childNodes.length - 1; i > 0; i--) {
            dateContent.removeChild(dateContent.childNodes[i]);
        }
        var newDateContentItem, newDateContentItemNum;
        var dayTemp = new Date(dayChosenBefore.valueOf());
        // 重新生成子节点 上一月
        for (j = 0; j < weekIndex; j++) {
            // 先创建 li
            newDateContentItem = document.createElement('li');
            newDateContentItem.className = "date-content-item not-this-month";
            dateContent.appendChild(newDateContentItem);
            // 再创建 p
            newDateContentItemNum = document.createElement('p');
            if (dayTemp.getDay() === 0 || dayTemp.getDay() === 6) {
                newDateContentItemNum.className = "num weekend";
            } else {
                newDateContentItemNum.className = "num";
            }
            newDateContentItemNum.textContent = dayTemp.getDate();
            newDateContentItem.appendChild(newDateContentItemNum);
            dayTemp = new Date(dayTemp.valueOf() + 24 * 60 * 60 * 1000);
        }
        // 重新生成子节点 本月
        dayTemp = new Date(dayChosen.valueOf());
        for (j = 0; j < calendar.getMonthDate(year, month); j++) {
            newDateContentItem = document.createElement('li');
            newDateContentItem.className = "date-content-item";
            dateContent.appendChild(newDateContentItem);

            newDateContentItemNum = document.createElement('p');
            if (dayTemp.getDay() === 0 || dayTemp.getDay() === 6) {
                newDateContentItemNum.className = "num weekend";
            } else {
                newDateContentItemNum.className = "num";
            }
            newDateContentItemNum.textContent = dayTemp.getDate();
            newDateContentItem.appendChild(newDateContentItemNum);

            dayTemp = new Date(dayTemp.valueOf() + 24 * 60 * 60 * 1000);
        }
        // 重新生成子节点 下月
        dayTemp = new Date(dayChosen.valueOf() + 24 * 60 * 60 * 1000 * calendar.getMonthDate(year, month));
        for (j = 0; j < 42 - weekIndex - calendar.getMonthDate(year, month); j++) {
            newDateContentItem = document.createElement('li');
            newDateContentItem.className = "date-content-item not-this-month";
            dateContent.appendChild(newDateContentItem);

            newDateContentItemNum = document.createElement('p');
            if (dayTemp.getDay() === 0 || dayTemp.getDay() === 6) {
                newDateContentItemNum.className = "num weekend";
            } else {
                newDateContentItemNum.className = "num";
            }
            newDateContentItemNum.textContent = dayTemp.getDate();
            newDateContentItem.appendChild(newDateContentItemNum);
            dayTemp = new Date(dayTemp.valueOf() + 24 * 60 * 60 * 1000);
        }


    },

    // 取得前一年的时间串
    getPreYear: function(year) {
        var thisYear = new Date(year, 5);
        var preYear = new Date(thisYear.valueOf() - 24 * 60 * 60 * 1000 * 365);
        return preYear.getFullYear();
    },

    // 取得后一年的时间串
    getNextYear: function(year) {
        var thisYear = new Date(year, 5);
        var nextYear = new Date(thisYear.valueOf() + 24 * 60 * 60 * 1000 * 365);
        return nextYear.getFullYear();
    },

    // 取得前一月的时间串
    getPreMonth: function(year, month) {
        month = month - 1;
        var thisMonth = new Date(year, month, 15);
        var preMonth = new Date(thisMonth.valueOf() - 24 * 60 * 60 * 1000 * 30);
        return preMonth.getMonth() + 1;
    },
    // 取得后一月的时间串
    getNextMonth: function(year, month) {
        month = month - 1;
        var thisMonth = new Date(year, month, 15);
        var nextMonth = new Date(thisMonth.valueOf() + 24 * 60 * 60 * 1000 * 30);
        return nextMonth.getMonth() + 1;
    },
    // 判断一个月有几天
    getMonthDate: function(year, month) {
        month = String(month);
        switch (month) {
            case '1':
            case '3':
            case '5':
            case '7':
            case '8':
            case '10':
            case '12':
                return 31;
            case '4':
            case '6':
            case '9':
            case '11':
                return 30;
            case '2':
                if (year % 400 === 0 || year % 4 === 0 && year % 100 !== 0) {
                    return 29;
                } else {
                    return 28;
                }
                break;
            default:
                console.log('月份错误');
                break;
        }
    },
};

// 年，月选择框
var yearToggle = document.querySelector("#year-show");
var yearShow = document.querySelector("#year-show .this-change");
var yearHiddenChoose = document.querySelector(".year-hidden-choose");
var monthToggle = document.querySelector("#month-show");
var monthShow = document.querySelector("#month-show .this-change");
var monthHiddenChoose = document.querySelector(".month-hidden-choose");

var dateContent = document.querySelector(".date-content");

// 动态生成页面
// calendar.getDateContent(calendar.getYear(),calendar.getMonth());

document.querySelector(".container").addEventListener('click', function(event) {
    event = event ? event : window.event;
    var target = event.target || event.srcElement;
    console.log(target.className);
    var thisYear, thisMonth;
    if (target.className != 'icon-sort-desc year-icon' && target.className != 'this-change year-change' &&
        target.className != 'year-choose-show' && target.className != 'year-hidden-choose' &&
        target.className != 'year-choose-item') {
        yearHiddenChoose.style.display = 'none';
    }
    if (target.className != 'icon-sort-desc month-icon' && target.className != 'this-change month-change' &&
        target.className != 'month-choose-show' && target.className != 'month-hidden-choose' &&
        target.className != 'month-choose-item') {
        monthHiddenChoose.style.display = 'none';
    }
    switch (target.className) {

        // 年选择框的点击
        case 'icon-sort-desc year-icon':
        case 'this-change year-change':
        case 'year-choose-show':
            if (yearHiddenChoose.style.display == 'none') {
                yearHiddenChoose.style.display = 'block';
            } else if (yearHiddenChoose.style.display == 'block') {
                yearHiddenChoose.style.display = 'none';
            }
            break;

            // 月选择框的点击
        case 'icon-sort-desc month-icon':
        case 'this-change month-change':
        case 'month-choose-show':
            if (monthHiddenChoose.style.display == 'none') {
                monthHiddenChoose.style.display = 'block';
            } else if (monthHiddenChoose.style.display == 'block') {
                monthHiddenChoose.style.display = 'none';
            }
            break;

            // 上一年
        case 'icon-circle-left year-icon':
            // textContent不支持IE678
            thisYear = yearShow.textContent;
            yearShow.textContent = calendar.getPreYear(thisYear);
            break;
            // 下一年
        case 'icon-circle-right year-icon':
            thisYear = yearShow.textContent;
            yearShow.textContent = calendar.getNextYear(thisYear);
            break;
            // 上一月
        case 'icon-circle-left month-icon':
            thisYear = yearShow.textContent;
            thisMonth = monthShow.textContent;
            monthShow.textContent = calendar.getPreMonth(thisYear, thisMonth);
            break;
            // 下一月
        case 'icon-circle-right month-icon':
            thisYear = yearShow.textContent;
            thisMonth = monthShow.textContent;
            monthShow.textContent = calendar.getNextMonth(thisYear, thisMonth);
            break;
            // 点击年选择框，完成选择
        case 'year-choose-item':
            yearShow.textContent = target.textContent.replace(/[^0-9]/ig, "");
            yearHiddenChoose.style.display = 'none';
            break;
            // 点击月选择框，完成选择
        case 'month-choose-item':
            monthShow.textContent = target.textContent.replace(/[^0-9]/ig, "");
            monthHiddenChoose.style.display = 'none';
            break;
        default:
            break;
    }
    switch (target.className) {
        // 上一年
        case 'icon-circle-left year-icon':
            // 下一年
        case 'icon-circle-right year-icon':
            // 上一月
        case 'icon-circle-left month-icon':
            // 下一月
        case 'icon-circle-right month-icon':
            // 点击年选择框，完成选择
        case 'year-choose-item':
            // 点击月选择框，完成选择
        case 'month-choose-item':
            calendar.getDateContent(yearShow.textContent, monthShow.textContent);
            break;
        default:
            break;
    }
});
