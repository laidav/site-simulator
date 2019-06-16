import BlockNode from "./models/BlockNode";

export default class NeighborhoodTree {
  constructor(NeighborhoodsList) {
    const nodeMapper = new Map();

    for (let i = 0; i < NeighborhoodsList.length; i++) {
      nodeMapper.set(NeighborhoodsList[i].id, new BlockNode(NeighborhoodsList[i]));
    }

    for (let i = 0; i < NeighborhoodsList.length; i++) {
      let node = nodeMapper.get(NeighborhoodsList[i].id);
      node.firstChild = nodeMapper.get(NeighborhoodsList[i].first_child_id) || null;
      node.rightSibling =
        nodeMapper.get(NeighborhoodsList[i].right_sibling_id) || null;
    }

    this.root = nodeMapper.get(12);
    this.nodeMapper = nodeMapper;
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