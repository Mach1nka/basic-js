module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }else if (arr.length ===0) {
    return [];
  }
  for(let i=0; i<arr.length; i++){
    if (arr[i]==="--double-next") {
      if (i < arr.length-1) {
        arr.splice(i, 1, arr[i+1]);
        i++;
      }else{arr.splice(i, 1)}
   }if (arr[i]==="--double-prev") {
    if (i>0) {
      arr.splice(i, 1, arr[i-1]);
      i++;
    }else {arr.splice(i, 1)}
   }
 }
 for(let i=0; i<arr.length; i++) {
   if(arr[i]==="--discard-next") {
     if (i< arr.length-1) {
       arr.splice(i, 2);
        i--;
     }else {arr.splice(i,1)}
   }
   if (arr[i]==="--discard-prev") {
     if(i>0) {
       arr.splice(i-1, 2);
        i--;
     }else{arr.splice(i,1);}
   }
 }
  /*for(let i=0; i<arr.length; i++){   //  должно работать по условию, но в этом решении последовательности работают не одновременно((( ,а последовательно 
    if(arr.includes("--discard-next")) {
      arrInd = arr.findIndex(elem => elem === "--discard-next");
      if (arrInd === arr.length-1) {
         arr.pop();
      }else {arr.splice(arrInd,2);}
    } if (arr.includes("--discard-prev")) {
      arrInd = arr.findIndex(elem => elem === "--discard-prev");
      if(arrInd===0) {
          arr.shift();
      }else{arr.splice(arrInd-1,2);}
    } if (arr.includes("--double-next")) {
      arrInd = arr.findIndex(elem => elem === "--double-next");
      if (arrInd === arr.length-1) {
          arr.pop();
      }else{arr[arrInd] = arr[arrInd+1];}
    } if (arr.includes("--double-prev")) {
      arrInd = arr.findIndex(elem => elem === "--double-prev");
      if (arrInd===0) {
          arr.shift();
      }else {arr[arrInd] = arr[arrInd-1];}
    }
  }*/
    return arr;
};
