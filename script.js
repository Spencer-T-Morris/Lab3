let name = "Spencer T. Morris"
let age = 22
let birthday = "June 2"
const detroitGC = false
var counter=0

let lifeEvents= ["I was born in oklahoma", "I moved to michigan",
 "I drove a car", "I joined a bootcamp"]

 function greeting() {
    if (detroitGC == true) {
      return "My name is "  + name + " and I am a student at Grand Circus in Detroit, Michigan. "+
      "I am currently "+ age + " years old and my birthday is on "+ birthday ;
      
    } else {
        return "My name is "  + name + " and I am a student at Grand Circus in Grand Rapids, Michigan. "+
        "I am currently "+ age + " years old and my birthday is on "+ birthday ;
    }
  }
  
  console.log(greeting());

  for ( let i = 0; i < lifeEvents.length; i++) {console.log(lifeEvents[i])}
 

while(true){
  var randomNumber = Math.floor( Math.random() * 10 + 1)
  console.log(randomNumber) 
  if( randomNumber===5){
      console.log("randomNumber !== 5")
      break;
  } else {
      counter++;
  }
}
console.log("5 === 5. It took " + counter +
    " iterations to randomly generate the number 5")