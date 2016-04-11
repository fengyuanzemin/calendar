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

console.log("当前年份是：" + fullYear);
console.log("当前月份是：" + month);
console.log("当前日子是：" + date);
console.log("当前是周：" + day);
console.log("当前日期是：" + todayDate);

// 年，月选择框
var yearShow = document.querySelector("#year-show");
var yearHiddenChoose = document.querySelector("#year-hidden-choose");
var monthShow = document.querySelector("#month-show");
var monthHiddenChoose = document.querySelector("#month-hidden-choose");

console.log(yearShow);
console.log(yearHiddenChoose);
console.log(monthShow);
console.log(monthHiddenChoose);


yearShow.addEventListener('click', function() {
    console.log('事件为：yearShowClick');
});
monthShow.addEventListener('click', function() {
    console.log('事件为：monthShowClick');
})

// 上下年月
var yearChooseLeft = document.querySelector(".year-choose .icon-circle-left");
var yearChooseRight = document.querySelector(".year-choose .icon-circle-right");

var monthChooseLeft = document.querySelector(".month-choose .icon-circle-left");
var monthChooseRight = document.querySelector(".month-choose .icon-circle-right");

console.log(yearChooseLeft);
console.log(yearChooseRight);
console.log(monthChooseLeft);
console.log(monthChooseRight);

yearChooseLeft.addEventListener('click', function() {
    console.log('事件为：yearChooseLeftClick');
    // textContent不支持IE678
    var thisYear = yearShow.textContent.substring(0, 4);
    console.log('今年是：'+thisYear);
    return getPreYear(thisYear);

});
yearChooseRight.addEventListener('click', function() {
    console.log('事件为：yearChooseRightClick');
    var thisYear = yearShow.textContent.substring(0, 4);
    console.log(thisYear);
});
monthChooseLeft.addEventListener('click', function() {
    console.log('事件为：monthChooseLeftClick');
    var thisMonth = monthShow.textContent.substring(0, 1);
    console.log(thisMonth);
});
monthChooseRight.addEventListener('click', function() {
    console.log('事件为：monthChooseRightClick');
    var thisMonth = monthShow.textContent.substring(0, 1);
    console.log(thisMonth);
});
// 生成当前月份

// 全局函数-取得前一年/月的时间串

function getPreYear(year) {
	console.log('传入参数为:'+year);
    var thisYear = new Date(year);
    var preYear = new Date(thisYear.valueOf() - 24 * 60 * 60 * 1000 * 365);
    console.log('上一年是'+preYear.getFullYear());
    return preYear.getFullYear();
}

// 全局函数-取得后一年/月的时间串

function getNextDate(date) {
    var s = date.split('-'),
        year = parseInt(s[0]),
        month = parseInt(s[1]) - 1,
        day = parseInt(s[2]);
    var nextDayString;
    if (day && month && year) {
        var today = new Date(year, month, day);
        var nextDay = new Date(today.valueOf() + 24 * 60 * 60 * 1000);
        var n_day = nextDay.getDate(),
            n_month = nextDay.getMonth() + 1;
        if (n_day < 10) {
            n_day = "0" + n_day;
        }
        if (n_month < 10) {
            n_month = "0" + n_month;
        }
        nextDayString = nextDay.getFullYear() + '-' + n_month + '-' + n_day;
    }
    return nextDayString;
}
