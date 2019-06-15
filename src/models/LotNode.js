export default class LotNode {
    constructor(value, next = null, previous = null, across = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
      this.across = across;
    }
  
    toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
    }
  }