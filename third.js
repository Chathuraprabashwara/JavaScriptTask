function ScaleBalancing(strArr) {
    const a1 = JSON.parse(strArr[0])[0];
    const a2 = JSON.parse(strArr[0])[1];
    let weights = JSON.parse(strArr[1]);
    for (let i = 0; i < weights.length; i++) {
        if (a1 + weights[i] === a2 || a2 + weights[i] === a1) {   
            if (a1 > a2){
                return 'add right side ' + weights[i]; 
            } 
            else{
                return 'add left side ' + weights[i]; 
            }     
           
        }
     
        for (let j = i + 1; j < weights.length; j++) {
            if (a1 + weights[i] + weights[j] === a2 ||
                a2 + weights[i] + weights[j] === a1 ||
                a1 + weights[i] === a2 + weights[j] ||
                a2 + weights[i] === a1 + weights[j]) {
                return ' left side add ' + weights[i] + ',  right side add ' + weights[j]; 
            }
        }
    }
    return 'not possible';
}

console.log(ScaleBalancing(["[1, 6]", "[1, 5,2, 7]"]));
     
    
