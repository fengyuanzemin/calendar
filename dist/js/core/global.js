function getDateContent(e,t){var n,o=new Date(e,t-1,1),a=o.getDay(),c=new Date(o.valueOf()-864e5*a);for(i=dateContent.childNodes.length-1;i>0;i--)dateContent.removeChild(dateContent.childNodes[i]);var s,h,r=new Date(c.valueOf());for(n=0;a>n;n++)s=document.createElement("li"),s.className="date-content-item not-this-month",dateContent.appendChild(s),h=document.createElement("p"),0===r.getDay()||6===r.getDay()?h.className="num weekend":h.className="num",h.textContent=r.getDate(),s.appendChild(h),r=new Date(r.valueOf()+864e5);for(r=new Date(o.valueOf()),n=0;n<getMonthDate(e,t);n++)s=document.createElement("li"),s.className="date-content-item",dateContent.appendChild(s),h=document.createElement("p"),0===r.getDay()||6===r.getDay()?h.className="num weekend":h.className="num",h.textContent=r.getDate(),s.appendChild(h),r=new Date(r.valueOf()+864e5);for(r=new Date(o.valueOf()+864e5*getMonthDate(e,t)),n=0;n<42-a-getMonthDate(e,t);n++)s=document.createElement("li"),s.className="date-content-item not-this-month",dateContent.appendChild(s),h=document.createElement("p"),0===r.getDay()||6===r.getDay()?h.className="num weekend":h.className="num",h.textContent=r.getDate(),s.appendChild(h),r=new Date(r.valueOf()+864e5)}function getPreYear(e){var t=new Date(e,5),n=new Date(t.valueOf()-31536e6);return n.getFullYear()}function getNextYear(e){var t=new Date(e,5),n=new Date(t.valueOf()+31536e6);return n.getFullYear()}function getPreMonth(e,t){t-=1;var n=new Date(e,t,15),o=new Date(n.valueOf()-2592e6);return o.getMonth()+1}function getNextMonth(e,t){t-=1;var n=new Date(e,t,15),o=new Date(n.valueOf()+2592e6);return o.getMonth()+1}function getMonthDate(e,t){switch(t){case"1":case"3":case"5":case"7":case"8":case"10":case"12":return 31;case"4":case"6":case"9":case"11":return 30;case"2":return e%400===0||e%4===0&&e%100!==0?29:28;default:console.log("月份错误")}}var weekStringZH_CNThree=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"],weekStringZH_CNTwo=["周日","周一","周二","周三","周四","周五","周六"],lunarString=["初一","初二","初三","初四","初五","初六","初七","初八","初九","初十","十一","十二","十三","十四","十五","十六","十七","十八","十九","二十","廿一","廿二","廿三","廿四","廿五","廿六","廿七","廿八","廿九","三十"],today=new Date,fullYear=today.getFullYear(),month=today.getMonth()+1,date=today.getDate(),day=weekStringZH_CNThree[today.getDay()],todayDate=fullYear+"年"+month+"月"+date+"日"+day;console.log("今天日期是："+todayDate);var yearToggle=document.querySelector("#year-show"),yearShow=document.querySelector("#year-show .this-change"),yearHiddenChoose=document.querySelector(".year-hidden-choose"),monthToggle=document.querySelector("#month-show"),monthShow=document.querySelector("#month-show .this-change"),monthHiddenChoose=document.querySelector(".month-hidden-choose"),dateContent=document.querySelector(".date-content");document.querySelector(".container").addEventListener("click",function(e){e=e?e:window.event;var t=e.target||e.srcElement;console.log(t.className);var n,o;switch("icon-sort-desc year-icon"!=t.className&&"this-change year-change"!=t.className&&"year-choose-show"!=t.className&&"year-hidden-choose"!=t.className&&"year-choose-item"!=t.className&&(yearHiddenChoose.style.display="none"),"icon-sort-desc month-icon"!=t.className&&"this-change month-change"!=t.className&&"month-choose-show"!=t.className&&"month-hidden-choose"!=t.className&&"month-choose-item"!=t.className&&(monthHiddenChoose.style.display="none"),t.className){case"icon-sort-desc year-icon":case"this-change year-change":case"year-choose-show":"none"==yearHiddenChoose.style.display?yearHiddenChoose.style.display="block":"block"==yearHiddenChoose.style.display&&(yearHiddenChoose.style.display="none");break;case"icon-sort-desc month-icon":case"this-change month-change":case"month-choose-show":"none"==monthHiddenChoose.style.display?monthHiddenChoose.style.display="block":"block"==monthHiddenChoose.style.display&&(monthHiddenChoose.style.display="none");break;case"icon-circle-left year-icon":n=yearShow.textContent,yearShow.textContent=getPreYear(n);break;case"icon-circle-right year-icon":n=yearShow.textContent,yearShow.textContent=getNextYear(n);break;case"icon-circle-left month-icon":n=yearShow.textContent,o=monthShow.textContent,monthShow.textContent=getPreMonth(n,o);break;case"icon-circle-right month-icon":n=yearShow.textContent,o=monthShow.textContent,monthShow.textContent=getNextMonth(n,o);break;case"year-choose-item":yearShow.textContent=t.textContent.replace(/[^0-9]/gi,""),yearHiddenChoose.style.display="none";break;case"month-choose-item":monthShow.textContent=t.textContent.replace(/[^0-9]/gi,""),monthHiddenChoose.style.display="none"}switch(t.className){case"icon-circle-left year-icon":case"icon-circle-right year-icon":case"icon-circle-left month-icon":case"icon-circle-right month-icon":case"year-choose-item":case"month-choose-item":getDateContent(yearShow.textContent,monthShow.textContent)}});