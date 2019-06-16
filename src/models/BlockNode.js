export default class BlockNode {
    constructor(value, firstChild = null, nextSibling = null) {
        this.value = value;
        this.firstChild = firstChild; 
        this.nextSibling = nextSibling;
    }
}