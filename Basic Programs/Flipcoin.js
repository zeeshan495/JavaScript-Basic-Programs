
function flipCoin(){
    let heads = 0;
    let tails = 0;  
    const noOfTimesToFlip = document.getElementById('input').value;             
    for(var index = 0; index < noOfTimesToFlip; index++){ 
        (Math.random() > 0.5) ? (heads++) : (tails++);    // -- using ternary operator, alternative code for above code.             
    }
    document.getElementById("Giveninput").innerHTML = noOfTimesToFlip; 
    document.getElementById("heads").innerHTML = 'Number of heads ' + heads;
    document.getElementById("tails").innerHTML = 'Number of tails ' + tails;
}

const inputValidator = (event) => {
    if(!Number(event.key)) {
        alert('Please enter a number');
        event.preventDefault();
    }
}