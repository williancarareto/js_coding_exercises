const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  for(i = 0; i < nums.length; i++ ){
    if(n === nums[nums.length-1]){
      return null;
    }
    
    if(n === nums[i]){
      return nums[i+1];
    } 
  } return null;
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
  if (arr.length <2) {
    return arr
  }

  let first = arr.shift()
  let last =  arr.pop()

  arr.unshift(last) 
  arr.push(first)
  return arr
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
  let reg = new RegExp(searchTerm, 'i')

  for(let key in haystack){
    if ( reg.test(haystack[key]) == true){
      return true;
    }
  }   return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  
  let reg = /(\w|\s)*\w(?=")|\w+/g
  const frequencies = {}

  for (let i = 0; i < str.length; i++) {
    const words = str.match(reg)[i];
    if (frequencies[words] === undefined) {
      frequencies[words] = 1;
    } else {
      frequencies[words]++;
    }
  } return frequencies;
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
