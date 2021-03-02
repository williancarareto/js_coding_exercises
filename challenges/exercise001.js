function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return originalPrice + (originalPrice * (vatRate/100));
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  return originalPrice - (originalPrice * (reduction/100));
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  return str.length % 2 ? str.substr(str.length / 2, 1) : str.substr((str.length / 2) - 1, 2); 
  }

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split('').reverse().join('');
}


function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  for (var i = 0; i< words.length; i++)
   words[i] = words[i].split('').reverse().join(''); 
   return words;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here! 
 
    var count = 0;
    for (var i = 0; i < users.length; i++) 
      if (users[i].type ==="Linux")  {
      count++;    
    }  return count;
} 

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  var sum = 0;
  for (var i = 0; i < scores.length; i++){
      sum += scores[i];
  }
    return Number((sum / scores.length).toFixed(2))
  }

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n%3 == 0 && n%5 == 0)
    return 'fizzbuzz';
      if (n%3==0) 
        return 'fizz'
      if (n%5==0)
        return 'buzz'
      else (n%3 != 0 && n%5 != 0)
         return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
