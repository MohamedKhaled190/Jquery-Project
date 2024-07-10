// Srat home
window.addEventListener('scroll', function() {
  var navbar = document.querySelector('.open');
  if (window.scrollY > 348 ) { 
    navbar.style.display = 'none';
  } else {
    navbar.style.display = 'block';
  }
});
$('.close').on('click',function(){
  $('.SideNav').css('left','-250px')
})
$('.open').on('click',function(){
  $('.SideNav').css('left','0px')
})
// End Home
// Start Duration
$('.DurationContent h2').on('click',function(e){
const slide = document.querySelectorAll('.DurationContent p')
const ele = $( e.target).next()[0]
if(ele.style.display == 'block'){
    $(e.target).next().slideUp(500)
}else{ 
    $(slide).slideUp(500)
    $(e.target).next().slideDown(500)
}
})
// End Duration
// Start Details
let countDownDate = new Date("Sep 1, 2024 23:59:59").getTime();

 setInterval(() => {
let dateNow = new Date().getTime();
let dateDiff = countDownDate - dateNow;

let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
days < 10 ? days = "0" + days: days;

let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
hours < 10 ? hours = "0" + hours: hours;

let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
minutes < 10 ? minutes = "0" + minutes: minutes;

let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);
seconds < 10? (seconds = "0" + seconds): seconds;

document.getElementById("days").textContent = days;
document.getElementById("hours").textContent = hours;
document.getElementById("minutes").textContent = minutes;
document.getElementById("seconds").textContent = seconds;
}, 1000);
// End Details
// Start Contact
let count =document.querySelector('.message')
count.addEventListener('keyup',function(){
 document.getElementById('count').innerText = 100 - count.value.length


})

// End Contact