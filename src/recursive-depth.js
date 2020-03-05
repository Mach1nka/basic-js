module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 1;
      let depths=[];
      (function depthArray(arr){
        arr.forEach(function(el) {
          if (Array.isArray(el)) {
            depth++;
            depthArray(el);
          }else depths.push(depth)
        });
      })(arr);
      return depths.sort()[depths.length-1];
    } 
};
