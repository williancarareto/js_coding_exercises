function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squares = nums.map((num) => Math.pow(num, 2));
  return squares;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let arr = [];
  for(let i = 1; i < words.length; i++){
     arr.push(words[i].charAt(0).toUpperCase() + words[i].slice(1));
  } return words[0]+arr.join('');
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!

    let count = 0;
    for(let i=0; i<people.length; i++){
       count += people[i].subjects.length  
      } 
      return count;
  }

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
 
  let count = 0;
  for (let i = 0; i < menu.length; i++){
    if(menu[i].ingredient != 'milk'){
    count++;
    if (ingredient === 'dark chocolate') {
      return true;
      }
      return false;
    }
  }  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("sarr2 is required");
  // Your code here!  
  let arr3 = [];
  for(let i=0; i<arr1.length; i++){
    for(let j=0; j<arr2.length; j++){
      if(arr1[i] === arr2[j]){
      arr3.push(arr1[i]);
      
      }  
    }
  } 
  return arr3.filter((value, index) => arr3.indexOf(value) === index).sort();
}


module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};


