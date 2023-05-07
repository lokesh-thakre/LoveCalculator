(function(){
let button = document.querySelector(`button`)
let body  = document.querySelector(`body`)
let color = [`#F0F8FF`, `#00FFFF`, `#F5F5DC`, `#A52A2A`, `#7FFF00`, `#6495ED`]

body.style.backgroundColor = 'brown'
button.addEventListener(`click`, function clr(){
  
let colour = parseInt(Math.random()*6)
body.style.backgroundColor = color[colour]

})


})();
