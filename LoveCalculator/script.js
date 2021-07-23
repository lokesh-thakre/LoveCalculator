Percentage = ()=>{


    var your = document.getElementById('name').value;
    var love = document.getElementById('lname').value;


if(your == "")
{
alert("Enter your name");

}
else if(!isNaN(your)){
alert("enter alphabets");
}
else if(love == "")
{
alert("enter love's name");

}
else if(!isNaN(love))
{
alert("enter alphabets");
}
else{

    var result = Math.random()*100;
    var result = Math.floor(result);
    document.getElementById('truth').value = result + '%';

}}
