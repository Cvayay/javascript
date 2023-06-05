function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }
  
  let str = "ishsi";
  
  if (isPalindrome(str)) {
    console.log("is palindrome");
  } else {
    console.log("is not palindrome");
  }
  