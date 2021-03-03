function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squares = nums.map((num) => Math.pow(num, 2));
  return squares;

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  return words.toUpperCase() + word.substring(1, word.length);
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
/*var count = 0;
    for (var i = 0; i < users.length; i++) 
      if (users[i].type ==="Linux")  {
      count++;    
    }  return count;*/

}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!

  /*let count = 0;
  for (let i = 0; i < menu.length; i++){
    if(menu[i].ingredient != 'milk'){
      count++;
      return false;
    }    
  } */
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("sarr2 is required");
  // Your code here!
  /*let count = 0;
  for (let i=0; i<arr1.length; i++){
    for (let j=0; i<arr2.length; j++){
      if (arr1[i] == arr2[j]){
        count++;
        
      }
    }
  } return count;*/
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};


