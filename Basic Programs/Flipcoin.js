
function flipCoin(noOfTimesToFlip){
    let randomValue = 0;
    let heads = 0;
    let tails = 0;
//Prompt -- if you want the user to input a value before entering a page.
//const noOfTimesToFlip = prompt('Please enter the number of times to Flip Coin');
//const noOfTimesToFlip = document.getElementById("input").value;
for(var index = 0; index < noOfTimesToFlip; index++){
    // randomValue = Math.random();
    //  if(randomValue > 0.5)
    //     heads++;
    //  else
    //     tails++; 
    (Math.random() > 0.5) ? (heads++) : (tails++);    // -- using ternary operator, alternative code for above code.             
}
document.getElementById("Giveninput").innerHTML = noOfTimesToFlip; 
document.getElementById("heads").innerHTML = 'Number of heads ' + heads;
document.getElementById("tails").innerHTML = 'Number of tails ' + tails;
}