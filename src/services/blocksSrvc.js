import lotRowsSrvc from "./lotRowsSrvc";
import BlockNode from "../models/BlockNode";

const blocksList = [
    { 
        id: 1, 
        name: "Farnam's Block",
        className: "farnams-neighborhood",
        lotRows: [] 
    },
    {
        id: 2,
        name: "Jason's Block",
        className: "jasons-block",
        lotRows: [lotRowsSrvc[0], lotRowsSrvc[1]]
    },
    {
        id: 3,
        name: "Dave's Block",
        className: "daves-block",
        lotRows: [lotRowsSrvc[2], lotRowsSrvc[3]]
    }
  ];

  const davesBlock = new BlockNode(blocksList[2]);
  const jasonsBlock = new BlockNode(blocksList[1], null, davesBlock);
  const farnamsBlock = new BlockNode(blocksList[0], jasonsBlock, null);

  const blocks = [ farnamsBlock, jasonsBlock, davesBlock ];

  export default blocks;