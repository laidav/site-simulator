export default class BlockNode {
    constructor({ id, name, lotRowHeads = []}) {
        this.id = id;
        this.name = name;
        this.lotRowHeads = lotRowHeads;
        this.firstChild = null; 
        this.nextSibling = null;
    }
}