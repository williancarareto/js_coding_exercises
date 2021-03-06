function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
   
   let smallN = []; 
   for (let i=0; i < nums.length; i++){
     if (nums[i] < 1){
        smallN.push(nums[i]);
     }
   } return smallN;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  // Your code here

    let array = [];
    for(let i = 0; i<names.length; i++){
      if (names[i].charAt(0) === char){
      array.push(names[i]);
      }
    } return array;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  // Your code here
  let re = /^to / 
  let verbs = [];
  for(let i=0; i < words.length; i++){
  if (re.test(words[i])) {
    verbs.push(words[i])  
    }
  } return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let arrInt = [];
  for (let i = 0; i < nums.length; i++){
    if(Number.isInteger(nums[i])){
    arrInt.push(nums[i]);
    }
  } return arrInt;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  // Your code here
  let result = [];
  for (let i = 0; i < users.length; i++){
      result.push(users[i].data.city.displayName);
   
  }  return result;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  // Your code here
  let arrSquareRoot = []
  for (let i = 0; i < nums.length; i++) {
      arrSquareRoot.push(parseFloat(Math.sqrt(nums[i]).toFixed(2)))        
      }
     return arrSquareRoot     

}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  // Your code here
  let sentTemp = [];
  let sentRep = [];
  let sentFinal = [];

  for (let i = 0; i < sentences.length; i++) {
      sentTemp.push(sentences[i].toLowerCase())
  }

  for (let i = 0; i < sentTemp.length; i++) {
      for(let j = 0; j < str.length; j++) {
          if (sentTemp[i].includes(str[j])) {
              sentRep.push(sentTemp[i])
          }
      }
  }

  for (let i = 0; i < sentRep.length; i++) {
      sentFinal.push(sentRep[i].charAt(0).toUpperCase()+ sentRep[i].slice(1))

  } return sentFinal;
}
  
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  // Your code here
  let higherNumbers = []

  for (let i = 0; i < triangles.length; i++) {
      higherNumbers.push(Math.max(...triangles[i]));
  }
  return higherNumbers;
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
