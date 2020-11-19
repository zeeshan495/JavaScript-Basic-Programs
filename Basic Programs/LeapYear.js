
    //  Arrow function --must use before calling
    //   var leapyear = givenYear => (givenYear % 100 === 0) ? (givenYear % 400 === 0) : (givenYear % 4 === 0);
    document.addEventListener("DOMContentLoaded", findLeapYear);
    function findLeapYear(){
        const givenYear = prompt('Please enter a any year');
        document.getElementById('userInputID').innerHTML = givenYear;        
        document.getElementById('resultID').innerHTML =  (isLeapYear(givenYear)) ? ' is a leap year': ' is not a leap year';    
        function isLeapYear(givenYear)   {
            return (givenYear % 100 === 0) ? (givenYear % 400 === 0) : (givenYear % 4 === 0);        
        }                 
    }
        
        
        
