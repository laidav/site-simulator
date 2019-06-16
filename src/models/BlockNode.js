export default class BlockNode {
    constructor({ id, name, lotRows = []}) {
        this.lotRows = lotRows;
        this.firstChild = null; 
        this.nextSibling = null;
    }
}