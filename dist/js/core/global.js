function getPreYear(e){console.log("传入参数为:"+e);var o=new Date(e,5),t=new Date(o.valueOf()-31536e6);return console.log("上一年是"+t.getFullYear()),t.getFullYear()}function getNextYear(e){console.log("传入参数为:"+e);var o=new Date(e,5),t=new Date(o.valueOf()+31536e6);return console.log("下一年是"+t.getFullYear()),t.getFullYear()}function getPreMonth(e,o){console.log("传入参数年为:"+e),console.log("传入参数月为:"+o),o-=1;var t=new Date(e,o,15),n=new Date(t.valueOf()-2592e6);return console.log("上一月是"+n.getMonth()),n.getMonth()+1}function getNextMonth(e,o){console.log("传入参数年为:"+e),console.log("传入参数月为:"+o),o-=1;var t=new Date(e,o,15),n=new Date(t.valueOf()+2592e6);return console.log("下一月是"+n.getMonth()),n.getMonth()+1}var weekStringZH_CNThree=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],weekStringZH_CNTwo=["周日","周一","周二","周三","周四","周五","周六"],lunarString=["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"],today=new Date,fullYear=today.getFullYear(),month=today.getMonth()+1,date=today.getDate(),day=weekStringZH_CNThree[today.getDay()],todayDate=fullYear+"年"+month+"月"+date+"日"+day;console.log("今天年份是："+fullYear),console.log("今天月份是："+month),console.log("今天日子是："+date),console.log("今天是周："+day),console.log("今天日期是："+todayDate);var yearShow=document.querySelector("#year-show .this-change"),yearHiddenChoose=document.querySelector("#year-hidden-choose"),monthShow=document.querySelector("#month-show .this-change"),monthHiddenChoose=document.querySelector("#month-hidden-choose");console.log(yearShow),console.log(yearHiddenChoose),console.log(monthShow),console.log(monthHiddenChoose),yearShow.addEventListener("click",function(){console.log("事件为：yearShowClick")}),monthShow.addEventListener("click",function(){console.log("事件为：monthShowClick")});var yearChooseLeft=document.querySelector(".year-choose .icon-circle-left"),yearChooseRight=document.querySelector(".year-choose .icon-circle-right"),monthChooseLeft=document.querySelector(".month-choose .icon-circle-left"),monthChooseRight=document.querySelector(".month-choose .icon-circle-right");console.log(yearChooseLeft),console.log(yearChooseRight),console.log(monthChooseLeft),console.log(monthChooseRight),yearChooseLeft.addEventListener("click",function(){console.log("事件为：yearChooseLeftClick");var e=yearShow.textContent;console.log("今年是："+e),yearShow.textContent=getPreYear(e)}),yearChooseRight.addEventListener("click",function(){console.log("事件为：yearChooseRightClick");var e=yearShow.textContent;console.log("这一年是："+e),yearShow.textContent=getNextYear(e)}),monthChooseLeft.addEventListener("click",function(){console.log("事件为：monthChooseLeftClick");var e=yearShow.textContent,o=monthShow.textContent;console.log("这一年是："+e),console.log("这一月是："+o),monthShow.textContent=getPreMonth(e,o)}),monthChooseRight.addEventListener("click",function(){console.log("事件为：monthChooseRightClick");var e=yearShow.textContent,o=monthShow.textContent;console.log("这一年是："+e),console.log("这一月是："+o),monthShow.textContent=getNextMonth(e,o)});