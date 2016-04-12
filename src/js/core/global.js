// 定义的一些中文字符、术语
var weekStringZH_CNThree = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'];
var weekStringZH_CNTwo = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
// 农历
var lunarString = ['初一', '初二', '初三', '初四', '初五', '初六', '初七', '初八', '初九', '初十',
    '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '廿一',
    '廿二', '廿三', '廿四', '廿五', '廿六', '廿七', '廿八', '廿九', '三十'
];

// 获取当前时间
var today = new Date();
var fullYear = today.getFullYear();
var month = today.getMonth() + 1;
var date = today.getDate();
var day = weekStringZH_CNThree[today.getDay()];
var todayDate = fullYear + "年" + month + "月" + date + "日" + day;

console.log("今天日期是：" + todayDate);

// 年，月选择框
var yearToggle = document.querySelector("#year-show");
var yearShow = document.querySelector("#year-show .this-change");
var yearHiddenChoose = document.querySelector(".year-hidden-choose");
var monthToggle = document.querySelector("#month-show");
var monthShow = document.querySelector("#month-show .this-change");
var monthHiddenChoose = document.querySelector(".month-hidden-choose");

// 上下年月

document.querySelector(".container").addEventListener('click', function(event) {
    event = event ? event : window.event;
    var target = event.target || event.srcElement;
    console.log(target.className);
    var thisYear,thisMonth;
    if(target.className!='icon-sort-desc year-icon'&&target.className!='this-change year-change'&&
            target.className!='year-choose-show'&&target.className!='year-hidden-choose'&&
            target.className!='year-choose-item'){
        yearHiddenChoose.style.display = 'none';
    }
    if(target.className!='icon-sort-desc month-icon'&&target.className!='this-change month-change'&&
            target.className!='month-choose-show'&&target.className!='month-hidden-choose'&&
            target.className!='month-choose-item'){
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
            yearShow.textContent = getPreYear(thisYear);
            break;
            // 下一年
        case 'icon-circle-right year-icon':
            thisYear = yearShow.textContent;
            yearShow.textContent = getNextYear(thisYear);
            break;
            // 上一月
        case 'icon-circle-left month-icon':
            thisYear = yearShow.textContent;
            thisMonth = monthShow.textContent;
            monthShow.textContent = getPreMonth(thisYear, thisMonth);
            break;
            // 下一月
        case 'icon-circle-right month-icon':
            thisYear = yearShow.textContent;
            thisMonth = monthShow.textContent;
            monthShow.textContent = getNextMonth(thisYear, thisMonth);
            break;
        default:
            break;
    }
});


// 生成当前月份

// 全局函数-取得前一年的时间串

function getPreYear(year) {
    console.log('传入参数为:' + year);
    var thisYear = new Date(year, 5);
    var preYear = new Date(thisYear.valueOf() - 24 * 60 * 60 * 1000 * 365);
    console.log('上一年是' + preYear.getFullYear());
    return preYear.getFullYear();
}

// 全局函数-取得后一年的时间串

function getNextYear(year) {
    var thisYear = new Date(year, 5);
    var nextYear = new Date(thisYear.valueOf() + 24 * 60 * 60 * 1000 * 365);
    return nextYear.getFullYear();
}

// 全局函数-取得前一月的时间串
function getPreMonth(year, month) {
    month = month - 1;
    var thisMonth = new Date(year, month, 15);
    var preMonth = new Date(thisMonth.valueOf() - 24 * 60 * 60 * 1000 * 30);
    return preMonth.getMonth() + 1;
}
// 全局函数-取得后一月的时间串
function getNextMonth(year, month) {
    month = month - 1;
    var thisMonth = new Date(year, month, 15);
    var nextMonth = new Date(thisMonth.valueOf() + 24 * 60 * 60 * 1000 * 30);
    return nextMonth.getMonth() + 1;
}
