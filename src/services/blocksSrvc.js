import lotRows from "./lotRowsSrvc";
import BlockNode from "../models/BlockNode";

const blocksList = [
    { 
        id: 1, 
        name: "Farnam's Neighborhood",
        lotRowHeads: [] 
    },
    {
        id: 2,
        name: "Jason's Block",
        lotRowHeads: [lotRows[0].head, lotRows[1].head]
    },
    {
        id: 3,
        name: "Dave's Block",
        lotRowheads: [lotRows[2].head, lotRows[3].head]
    }
  ];

  const farnamsBlock = new BlockNode(blocksList[0]);
  const jasonsBlock = new BlockNode(blocksList[1]);
  const davesBlock = new BlockNode(blocksList[2]);

  farnamsBlock.firstChild = jasonsBlock;
  jasonsBlock.nextSibling = davesBlock;

  const blocks = [ farnamsBlock, jasonsBlock, davesBlock];

  export default blocks;