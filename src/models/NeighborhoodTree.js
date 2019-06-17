export default class NeighborhoodTree {
  constructor(root) {
    this.root = root;
    this.lotMapper = new Map();

    this._setlotMapper();
    this._setAcross();
  }

  _setAcross() {
    this.lotMapper.forEach((node, key, map) =>{
      if (node.value.acrossId !== null) {
        node.across = map.get(node.value.acrossId);
      }
    });
  }

  _setlotMapper() {
    const lots = this.getLots(this.root);
    
    for (let i = 0; i < lots.length; i++) {
      this.lotMapper.set(lots[i].value.id, lots[i]);
    }
  }

  getChildren(node) {
    const children = [];

    if (node.firstChild !== null) {
      children.push(node.firstChild);

      let currentNode = node.firstChild.rightSibling;

      while (currentNode !== null) {
        children.push(currentNode);
        currentNode = currentNode.rightSibling;
      }
    }

    return children;
  }

  dfsTraversal(searcher, startNode) {
    const _depthTraversalRecursive = node => {
      _checkSiblingsRecursive(node.firstChild);
    };

    const _checkSiblingsRecursive = node => {
      searcher.compare(node);

      if (searcher.searchDone) {
        return searcher.results;
      }

      if (node === null) {
        return;
      }

      if (node.firstChild) {
        _depthTraversalRecursive(node);
      }

      node = node.rightSibling;

      _checkSiblingsRecursive(node);
    };

    searcher.compare(startNode);

    _depthTraversalRecursive(startNode);

    searcher.searchDone = true;

    return searcher.searchResults;
  }

  getLots(refNode) {
    const lotSearch = {
      compare: (node) => {
        if (node !== null) {
          for (let i = 0; i < node.value.lotRows.length; i++) {
            lotSearch.searchResults = lotSearch.searchResults.concat(node.value.lotRows[i].toArray());
          }
        }
      },
      searchDone: false,
      searchResults: []
    };

    return this.dfsTraversal(lotSearch, refNode);
  }

  getDepth(refNode) {
    const depthSearch = {
      compare: node => {
        if (node === null) {
          depthSearch.ancestors.pop();
          return;
        }

        if (node === refNode) {
          depthSearch.searchResults = depthSearch.ancestors.length;
          depthSearch.searchDone = true;
        }

        if (node.firstChild) {
          depthSearch.ancestors.push(node);
        }
      },
      ancestors: [],
      searchDone: false,
      searchResults: null
    };

    return this.dfsTraversal(depthSearch, this.root);
  }
}