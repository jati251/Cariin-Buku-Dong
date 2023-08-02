function palindrome(string){
    let flag = "palindrome";
    for (i = 0; i < Math.floor(string.length / 2); i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            flag = "not palindrome";
            break;
        }
    }
    return flag
  }

  console.log(palindrome("racecar"));