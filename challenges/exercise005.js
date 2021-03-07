const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  var positionsFound = [];
  var valuesFound = [];

  //(findNextNumber([5, 3, 7, 8, 1, 10], 7)).toBe(8);

  for(let i = 0; i< nums.length; i++){
    if ( n === nums[i]){
      positionsFound.push[i];
      valuesFound.push[nums[i]];
    }
  }

  // //OK
  // if (positionsFound.length === 0){
  //   return null;
  // }

  if (positionsFound.length === 1){
    positionReturn = positionsFound[0] + 1;
    return nums[positionReturn];
  }

  // if (positionsFound.length > 1){
  //   positionReturn = positionsFound[0] + 1;
  //   return nums[positionReturn];
  // }

  //OK
  // if (valuesFound[valuesFound.length] === nums[nums.length]){
  //   return null;
  // }
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let sum = 0;
  for (let i = 0, length = str.length; i < length; i++) {
    sum += Number(str[i]);
  }
    return {'0': str.length - sum,'1': sum};
};

const reverseNumber = n => { 
  if (n === undefined) throw new Error("n is required");
  // Your code here!
    return (n.toString().split('').reverse().join('')) * Math.sign(n);
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
  let sumArrays = 0;
  // for (let i = 0, length = arrs.length; i < length; i++) {
  //   for (let j = 0, length = arrs[i].length; j < length; j++) {
  //     sumArrays += arrs[i][j];
  //   }
  // }
  arrs.forEach(element => {
    element.forEach(item => {
      sumArrays += item;
    })
  });
  return sumArrays;
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  return [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
