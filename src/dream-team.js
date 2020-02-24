module.exports = function createDreamTeam(members) {
  //пройтись по каждому элементу массива (map), взять первый символ, отсортировать
  //обрезать строку и проверить на тип данных(должна быть строка)
  if (!Array.isArray(members)) {
    return false;
  }else {
    let newArr = members.map(function(elem){
      if(typeof(elem)=="string"){
        let arr2 = elem.trim().toUpperCase();
        return arr2[0];
      }
   });
   return newArr.sort().join('');
  }
};
