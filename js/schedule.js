// TODO: create calendar
const week = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthShort = ["Jan.","Feb.","Mar.","Apr.","May.","June.","July.","Aug.","Sep.","Oct.","Nov.","Dec."];
// get now date time
let today = new Date()
let year = today.getFullYear();
// getMonth(): 0-11
let month = today.getMonth() + 1;
// get weekday of month first day
let myDate = new Date(year + ', ' + month + ', 01');
// get all days of month
let alldays = new Date(year, month, 0);
// switch of calendar date num
let boo = false;
// first date of month
let day = 1;

if (document.getElementById('schedule') !== null) window.onload = createCalendar();
function createCalendar(){
    // calendar header
    // month
    let node = document.createElement('div');
    node.id = 'calendarHeader';
    node.classList.add('calendarHeader');
    document.getElementById('schedule').appendChild(node);
    // last month
    node = document.createElement('div');
    node.id = 'lastmonth';
    node.addEventListener('click', lastMonth);
    node.classList.add('lastmonth');
    // month: 1-12
    node.innerText = (month - 1) === 0 ? '< ' + monthShort[11] : '< ' + monthShort[month - 2];
    document.getElementById('calendarHeader').appendChild(node);
    // this month
    node = document.createElement('div');
    node.classList.add('month');
    // month: 1-12
    node.innerText = monthName[month - 1];
    document.getElementById('calendarHeader').appendChild(node);
    // next month
    node = document.createElement('div');
    node.id = 'nextmonth';
    node.addEventListener('click', nextMonth);
    node.classList.add('nextmonth');
    // month: 1-12
    node.innerText = (month + 1) > 12 ? monthShort[0] + ' >' : monthShort[month] + ' >';
    document.getElementById('calendarHeader').appendChild(node);
    
    // calendar contain
    node = document.createElement('div');
    node.id = 'calendarContain';
    document.getElementById('schedule').appendChild(node);
    for (let i=0; i<6; i++) {
        node = document.createElement('div');
        node.id = 'week' + i;
        node.className = 'week';
        document.getElementById("calendarContain").appendChild(node);
        for (let j=0; j<7; j++) {
            node = document.createElement('div');
            node.classList.add('day');
            node.classList.add('day'+j);
            // week title
            if (i===0) {
                node.innerText=week[j];
            }
            // only this month have date num on calendar
            else {
                // day = weekday of this month first day -- start filled date num
                if (j===myDate.getDay() && boo===false) boo=true;
                // day over all days of this month -- end filled date num
                if (day>alldays.getDate()) boo=false;
                if (boo) {
                    node.innerText=day;
                    day++;
                }
            }
            document.getElementById('week' + i).appendChild(node);
        }
    }
    
    // calendar footer
    node = document.createElement('div');
    node.id = 'calendarFooter';
    node.classList.add('calendarFooter');
    document.getElementById('schedule').appendChild(node);
    // time period wrap
    node = document.createElement('div');
    node.id = 'timePeriod';
    node.classList.add('timePeriod');
    document.getElementById('calendarFooter').appendChild(node);
    // time period item
    node = document.createElement('span');
    node.innerText = '12:00~15:00';
    document.getElementById('timePeriod').appendChild(node);
    node = document.createElement('span');
    node.innerText = '15:00~18:00';
    document.getElementById('timePeriod').appendChild(node);
    node = document.createElement('span');
    node.innerText = '19:00~22:00';
    document.getElementById('timePeriod').appendChild(node);
    // appointment button
    node = document.createElement('button');
    node.innerText = '預約';
    node.classList.add('appointmentBtn');
    document.getElementById('calendarFooter').appendChild(node);
}

function reset(){
    myDate = new Date(year + ', ' + month + ', 01');
    alldays = new Date(year, month, 0);
    // switch of calendar date num
    boo = false;
    // first date of month
    day = 1;
    document.getElementById('schedule').innerHTML = '';
}

function lastMonth(){
    // innerText e.g. < Jan.
    let tmp = this.innerText.replace('< ','');
    month = monthShort.indexOf(tmp) + 1;
    // if last month = 12, year need -1
    if ( month === 12) year--;
    reset();
    createCalendar();
}

function nextMonth(){
    // innerText e.g. Feb. >
    let tmp = this.innerText.replace(' >','');
    month = monthShort.indexOf(tmp) + 1;
    // if next month = 1, year need +1
    if ( month === 1) year++;
    reset();
    createCalendar();
}