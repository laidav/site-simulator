export default class LotNode {
    constructor(value, next = null, previous = null, across = null) {
      this.value = value;
      this.next = next;
      this.previous = previous;
      this.across = across;
    }

    getLeftTwoNeighbors() {
      const neighbors = [];
      let currentNode = this;

      for (let i = 0; i < 2; i++) {
        if (currentNode.previous) {
          neighbors.push(currentNode.previous);
          currentNode = currentNode.previous;
        }
      }

      return neighbors;
    }

    getRightTwoNeighbors() {
      const neighbors = [];
      let currentNode = this;

      for (let i = 0; i < 2; i++) {
        if (currentNode.next) {
          neighbors.push(currentNode.next);
          currentNode = currentNode.next;
        }
      }

      return neighbors;
    }
  
    toString(callback) {
      return callback ? callback(this.value) : `${this.value}`;
    }
  }