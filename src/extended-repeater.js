module.exports = function repeater(str, options) {
    let separator = '+';
    let additionSeparator = '|';
    let addition = '';
    let repeatTimes = 1;
    let additionRepeatTimes = 1;

    if(options.hasOwnProperty('separator')) separator = options.separator;
    if(options.hasOwnProperty('additionSeparator')) additionSeparator = options.additionSeparator;
    if(options.hasOwnProperty('repeatTimes')){
     repeatTimes = options.repeatTimes;
     if(repeatTimes ==undefined) repeatTimes =1;
    }
    if(options.hasOwnProperty('addition')){
     addition = options.addition;
     if(addition == null) addition = 'null';
    }
    if(options.hasOwnProperty('additionRepeatTimes')) {
      additionRepeatTimes = options.additionRepeatTimes;
      if(additionRepeatTimes == undefined) additionRepeatTimes=1;
    }
    let addStr
    if(additionRepeatTimes>1)addStr = (addition+additionSeparator).repeat(additionRepeatTimes-1)+addition;
    else addStr = addition;
    let res = (str+addStr+separator).repeat(repeatTimes-1)+str+addStr;
    return res;




};
