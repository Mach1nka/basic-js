const chainMaker = {
  arr:[],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position> this.arr.length || position - 1 < 0) {
      this.arr = [];
      throw new Error('error');
    }else {
      this.arr.splice(position-1 , 1);
    }
    return  this;
  },
  reverseChain() {
     this.arr= this.arr.reverse();
     return this;
  },
  finishChain() {
     let res = this.arr.join('~~');
     this.arr=[];
     return res;
  }
};

module.exports = chainMaker;
