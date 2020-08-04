function change()
{
  var randomnumber1= Math.floor(Math.random()*6)+1;
  var randomnumber2= Math.floor(Math.random()*6)+1;
  var dice1= "images/dice" +randomnumber1+".png";
  var dice2= "images/dice" +randomnumber2+".png";
  document.querySelector(".img1").setAttribute("src", dice1);
  document.querySelector(".img2").setAttribute("src", dice2);
  if(randomnumber1>randomnumber2){
  document.querySelector("h2").innerHTML= "He loves you more";}
  else if (randomnumber1<randomnumber2) {
      document.querySelector("h2").innerHTML= "She loves you more";  }
  else {
  document.querySelector("h2").innerHTML= "You both love each other equally!";}
}
