(function(){
    let btn = document.querySelector(".btn")
    let body = document.querySelector("body")
    let arr = ["red","yellow","gray","Orange","Tomato","DodgerBlue","violet","SlateBlue","MediumSeaGreen"]
    body.style.backgroundColor =  "SlateBlue"
    btn.addEventListener("click",function clr(){
        let strintoInt = parseInt(Math.random()*9)
        body.style.backgroundColor = arr[strintoInt]

    })



})();