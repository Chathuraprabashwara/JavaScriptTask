function ScaleBalancing(strArr) {
//  console.log(strArr[0][0])  
 var x = strArr[0][0]
 var y = strArr[0][1]
 var z = strArr[1]
 var length= strArr[1].length
 console.log(length)
 for (var i=0 ; i <length; i++){
     
    var p = x + z[i];
    // console.log(p)
    if (p ==y ){
       console.log(`left side add ${z[i]} and right side add 0 `) 
    }
    else {
        for (var t=0; t< length; t++){
            var q = y + z[t]
            // console.log(q)
            // console.log(p)
            if(q==p){
                console.log(`left side add ${z[i]} right side add ${z[t]}`)
            }
        //    else{
        //        console.log("not possible")
        //    }

        }
    }
     

 }
 return 
 
 console.log(p)
}

ScaleBalancing([[3, 4], [1, 2, 2, 7]])