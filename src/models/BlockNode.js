export default class BlockNode {
    constructor(value, firstChild = null, rightSibling = null) {
        this.value = value;
        this.firstChild = firstChild; 
        this.rightSibling = rightSibling;
    }
}