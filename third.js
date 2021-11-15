function ScaleBalancing(strArr) {
    const a1 = JSON.parse(strArr[0])[0];
    const a2 = JSON.parse(strArr[0])[1];
    let weights = JSON.parse(strArr[1]);
    console.log(a1)
    if (a1 == a2) {
      return 'equal'
    }
    else {
      for (let i = 0; i < weights.length; i++) {
        if (a1 + weights[i] === a2 || a2 + weights[i] === a1) {
          if (a1 > a2) {
            return 'add right side ' + weights[i];
          }
          else {
            return 'add left side ' + weights[i];
          }
        }
      }
      for (let j = 0; j < weights.length; j++) {
        for (let i = 1; i < weights.length; i++) {
         
          if (a1 + weights[j] + weights[i] === a2 ||  a2 + weights[j] + weights[i]  === a1 ) {
            
            if (a1 > a2) {
              return ' right side add ' + weights[i] + " ," + weights[j]  
            }
            else if(a2 > a1)
            {
              return ' left side add ' + weights[j] + " ," +weights[i] ;
            }
            else {
              return ' left side add ' + weights[j] + ',  right side add ' + weights[i];
            }
            
          }
        }
      }
      for (let j = 0; j < weights.length; j++) {
        let h 
        for (let i = 0; i < weights.length; i++) {
  
          if (a1 + weights[j]  === a2 + weights[i] ||  a1 + weights[j]  === a2 + weights[i]) {
            if (a1 > a2) {
              h =' right side add ' + weights[i] + ', left side add ' + weights[j];
            }
            else {
              h = ' right side add ' + weights[j] + ', left side add ' + weights[i];
            }
          }
        }
       
      }
     console.log(h)
    }

    return 'not possible';
  }
  
  console.log(ScaleBalancing(["[13,4]", "[1,2,3,6,14]"]));


