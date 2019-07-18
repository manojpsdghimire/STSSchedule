const images = [
"http://wallpapercave.com/wp/9fHtOpw.jpg",
 "http://res.cloudinary.com/derkjanspeelman/image/upload/v1478694749/image29_jjwpxr.jpg",
],
    days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saterday"],
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    img = images[Math.round(Math.random() * (images.length - 1))],
    hours = document.getElementById("hours"),
    minutes = document.getElementById("minutes"),
    day = document.getElementById("day"),
    month = document.getElementById("month"),
    dayOfMonth = document.getElementById("dayOfMonth"),
  
	
d = new Date();

function numberFormat(n) {
  return (n < 10) ? '0' + n.toString() : n.toString();
}

HTMLElement.prototype.removeClass = function(remove) {
  var newClassName = "";
  var i;
  var classes = this.className.split(" ");
  for(i = 0; i < classes.length; i++) {
    if(classes[i] !== remove) {
      newClassName += classes[i] + " ";
    }
  }
  this.className = newClassName;
}

setInterval(function() {
  var d = new Date(),
      m = d.getMonth(),
      dd = d.getDay(),
      dom = d.getUTCDate(),
      h = numberFormat(d.getHours()),
      min = numberFormat(d.getMinutes());
  hours.innerHTML = h;
  minutes.innerHTML = min;
  day.innerHTML = days[dd];
  month.innerHTML = months[m];
  dayOfMonth.innerHTML = dom;
}, 1000);

main.style.backgroundImage = "url(" + img + ")";


