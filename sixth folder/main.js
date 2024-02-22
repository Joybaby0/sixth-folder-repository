let months = ["January", "Febuary", "March", "April","May","June","July","August","September","October","November","December", ]

let weekdays= ["Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday",]

let giveawayTime = document.querySelector(".giveaway")
let deadlineInfo = document.querySelector(".deadline")
let items = document.querySelectorAll(".deadline-format h3")

let futureDate = new Date(2024, 2, 4, 11, 30, 0)
// console.log(futureDate)

let year = futureDate.getFullYear()

let month = futureDate.getMonth()
month = months[month]

let date = futureDate.getDate()

let weekday = weekdays[futureDate.getDay()]
// console.log(weekday)

let hour = futureDate.getHours()

let minutes = futureDate.getMinutes()


giveawayTime.innerHTML = `giveaway ends on ${weekday}, ${date} ${month}, ${year}, ${hour}:${minutes}am`


let futureTime = futureDate.getTime()

function getRemainingTime(){
    let today = new Date().getTime()
    let t = futureTime - today

    // 1sec = 1000ms
    // imins = 60sec
    // 1hour = 60mins
    // 1day = 24hours

    let oneDay = 24*60*60*1000
    let oneHour = 60*60*1000
    let oneMins = 60*1000

    let days = t / oneDay
    days = Math.floor(days)
    let hours = Math.floor((t % oneDay) / oneHour)
    let mins = Math.floor((t % oneHour) / oneMins)
    let secs = Math.floor((t % oneMins) / 1000)

    let values = [days, hours, mins, secs]

    function format(item){
        if(item < 10){
            return (item = `0${item}`)
        }
        return item
    }

    items.forEach(function(item, index){
        item.innerHTML = format(values[index])
    })
    if(t< 0){
        clearInterval(countdown)
        deadlineInfo.innerHTML = `Sorry this giveaway has expired`
    }
}

let countdown = setInterval(getRemainingTime, 1000)
getRemainingTime()
