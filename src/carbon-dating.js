const MODERN_ACTIVITY= 15;
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  let result;
  let k = 0.693/HALF_LIFE_PERIOD;
  if(typeof sampleActivity!=='string'){
    return false;
  }else if (typeof parseFloat(sampleActivity) !== "number") {
    return false;
  }else if (parseFloat(sampleActivity)>15 || +sampleActivity<0) {
    return false;
  }else {
     result = Math.ceil(Math.log(MODERN_ACTIVITY/parseFloat(sampleActivity))/k);
  }
  return ~~result;
};
