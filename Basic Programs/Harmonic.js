function HarmonicValue(valueOfN){
    let result = getHarmonicValue(valueOfN);
    document.getElementById('input').innerHTML = valueOfN;
    document.getElementById('output').innerHTML = result;
    function getHarmonicValue(valueOfN){
        let result = 0;
        for(var index = 1; index <= valueOfN; index++){
            result += 1/index;
        }
        return result;
    }
}
        