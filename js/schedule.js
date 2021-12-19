// 取得現在年分及月分
let today = new Date()
let year = today.getFullYear()
let month = today.getMonth() + 1 // getMonth(): 0-11
// 取得當月共幾天、當月第一天為星期幾
let myDate = new Date(year + ', ' + month + ', 01')
let alldays = new Date(year, month, 0)
let boo = false // 行事曆填寫日期的開關
let day = 1 // 日期
const week = ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
const monthName = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const monthShort = ["Jan.","Feb.","Mar.","Apr.","May.","June.","July.","Aug.","Sep.","Oct.","Nov.","Dec."]

window.onload = createCalendar
function createCalendar(){
    // calendar header
    // 月份
    let node = document.createElement('div')
    node.id = 'calendar_header'
    node.classList.add('calendar_header')
    document.getElementById('schedule').appendChild(node)
    // 上個月
    node = document.createElement('div')
    node.id = 'lastmonth'
    node.addEventListener('click', lastMonth)
    node.classList.add('lastmonth')
    node.innerText = (month - 1) === 0 ? '< ' + monthShort[11] : '< ' + monthShort[month - 2]
    document.getElementById('calendar_header').appendChild(node)
    // 當月
    node = document.createElement('div')
    node.classList.add('month')
    node.innerText = monthName[month - 1] // month between 1-12
    document.getElementById('calendar_header').appendChild(node)
    // 下個月
    node = document.createElement('div')
    node.id = 'nextmonth'
    node.addEventListener('click', nextMonth)
    node.classList.add('nextmonth')
    node.innerText = (month + 1) > 12 ? monthShort[0] + ' >' : monthShort[month] + ' >'
    document.getElementById('calendar_header').appendChild(node)
    
    // calendar
    node = document.createElement('div')
    node.id = 'calendar_contain'
    document.getElementById('schedule').appendChild(node)
    for (let i=0; i<6; i++) {
        node = document.createElement('div')
        node.id = 'week' + i
        node.className = 'week'
        document.getElementById("calendar_contain").appendChild(node)
        for (let j=0; j<7; j++) {
            node = document.createElement('div')
            node.classList.add('day')
            node.classList.add('day'+j)
            if (i===0) {
                node.innerText=week[j]
            }
            else {
                if (j===myDate.getDay() && boo===false) boo=true
                if (day>alldays.getDate()) boo=false
                if (boo) {
                    node.innerText=day
                    day+=1
                }
            }
            document.getElementById('week' + i).appendChild(node)
        }
    }
    
    // calendar footer
    node = document.createElement('div')
    node.id = 'calendar_footer'
    node.classList.add('calendar_footer')
    document.getElementById('schedule').appendChild(node)
    // time period wrap
    node = document.createElement('div')
    node.id = 'timePeriod'
    node.classList.add('timePeriod')
    document.getElementById('calendar_footer').appendChild(node)
    // time period item
    node = document.createElement('span')
    node.innerText = '12:00~15:00'
    document.getElementById('timePeriod').appendChild(node)
    node = document.createElement('span')
    node.innerText = '15:00~18:00'
    document.getElementById('timePeriod').appendChild(node)
    node = document.createElement('span')
    node.innerText = '19:00~22:00'
    document.getElementById('timePeriod').appendChild(node)
    // appointment button
    node = document.createElement('button')
    node.innerText = '預約'
    node.classList.add('appointment_btn')
    document.getElementById('calendar_footer').appendChild(node)
}

function reset(){
    myDate = new Date(year + ', ' + month + ', 01')
    alldays = new Date(year, month, 0)
    boo = false // 行事曆填寫日期的開關
    day = 1 // 日期
    document.getElementById('schedule').innerHTML = ''
}
function lastMonth(){
    let tmp = this.innerText.replace('< ','')
    month = monthShort.indexOf(tmp) + 1
    if ( month === 12) year--
    reset()
    createCalendar()
}
function nextMonth(){
    let tmp = this.innerText.replace(' >','')
    month = monthShort.indexOf(tmp) + 1
    if ( month === 1) year++
    reset()
    createCalendar()
}
