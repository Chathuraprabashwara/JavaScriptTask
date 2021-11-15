

function LetterChanges(str) { 
  
  let strArray = str.toLowerCase().split("");
  let letterChange = strArray.map(function(value, index, array){
    
    if( str.charCodeAt(index) > 122){
  
      return value
    }else{
      // console.log(str.charCodeAt(index))
      if (str.charCodeAt(index) ==90 || str.charCodeAt(index)=== 122 ){
        console.log()
        return String.fromCharCode("97")
      }else if (str.charCodeAt(index) < 97 ){
       return String.fromCharCode(str.charCodeAt(index)+1).toLowerCase()
      }
       else{
        return String.fromCharCode(str.charCodeAt(index)+1)
      }
      
    }
  });
  
  letterChange = letterChange.map(function(value, index, array){
    if(/[aeiou]/.test(value)){
      return value.toUpperCase();
    }else{
      return value;
    }
  });
  
  return letterChange.join(""); 
}

console.log(LetterChanges("zzzzXXhhh"));