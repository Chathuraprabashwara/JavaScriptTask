function LetterChanges(str) { 

    var alphabet = "abcdefghijklmnopqrstuvwxyz";
    var newString = "";
    var letterIndex;
  
    for (var i = 0; i < str.length; i++) {
      letterIndex = alphabet.indexOf(str[i]);
      if (letterIndex === 25) {
        newString = newString + "a";
      } else if (letterIndex === -1) {
        newString = newString + str[i];
      } else {          
        newString = newString + alphabet[letterIndex + 1];
      }
    }
    
    return newString.replace(/[aeiou]/g, function(letter) {return letter.toUpperCase()});  
}

console.log(LetterChanges("chath21ura"));