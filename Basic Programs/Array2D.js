//JavaScript source code
function twoDArray() {
    let NoOfRows = document.getElementById("rowsInput");
    let NoOfColumns = document.getElementById("columnsInput");
    let arr = new Array(NoOfRows);    
    let count = 1;
    for (let row = 0; row < NoOfRows.value; row++) {
        arr[row] = new Array(NoOfColumns);
        for (let column = 0; column < NoOfColumns.value; column++) {
            arr[row] [column] = count;
            console.log(arr[row] [column]);
            count++;
        }
    }
    for (let row = 0; row < NoOfRows.value; row++) {
        for (let column = 0; column < NoOfColumns.value; column++) {
            console.log(arr[row] [column]);
        }
    }
    //document.getElementById("output").innerHTML = "Hello";
}