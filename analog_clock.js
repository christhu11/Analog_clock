var hours=document.querySelector(".needle_hrs")
var minutes=document.querySelector(".needle_min")
var seconds=document.querySelector(".needle_sec")

setInterval(clock,1000)

function clock(){
    var time=new Date()
    var sec=time.getSeconds()/60
    var min=time.getMinutes()/60
    var hrs=time.getHours()/12
    hours.style.setProperty("--rotation",hrs*360)
    minutes.style.setProperty("--rotation",min*360)
   seconds.style.setProperty("--rotation",sec*360)

}
clock()