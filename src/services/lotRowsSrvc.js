import LotRow from '../models/LotRow';

const lotsList = [
    {
        id: 1,
        acrossId: null
    },
    {
        id: 2,
        acrossId: null
    },
    {
        id: 3,
        acrossId: null
    },
    {
        id: 4,
        acrossId: null
    },
    {
        id: 5,
        acrossId: 12
    },
    {
        id: 6,
        acrossId: 11
    },        
    {
        id: 7,
        acrossId: 10
    },
    {
        id: 8,
        acrossId: 9
    },
    {
        id: 9,
        acrossId: 8
    },
    {
        id: 10,
        acrossId: 7
    },
    {
        id: 11,
        acrossId: 6
    },
    {
        id: 12,
        acrossId: 5
    },
    {
        id: 13,
        acrossId: 5
    },
    {
        id: 14,
        acrossId: 5
    },
    {
        id: 15,
        acrossId: 5
    },
    {
        id: 16,
        acrossId: 1
    },        {
        id: 17,
        acrossId: null
    },
    {
        id: 18,
        acrossId: null
    },
    {
        id: 19,
        acrossId: null
    },
    {
        id: 20,
        acrossId: null
    }
];

const lotRow_1_4 = new LotRow("1-4");
const lotRow_5_8 = new LotRow("5-8");
const lotRow_9_16 = new LotRow("9-16");
const lotRow_17_20 = new LotRow("17-20");

const populateLotRow = (list, lotRow) => {
  list.forEach((lot) => {
    lotRow.append(lot)
  });
}

populateLotRow(lotsList.slice(0,4), lotRow_1_4);
populateLotRow(lotsList.slice(4,8), lotRow_5_8);
populateLotRow(lotsList.slice(8,16), lotRow_9_16);
populateLotRow(lotsList.slice(16,20), lotRow_17_20);

const lotRowsSrvc = [ lotRow_1_4, lotRow_5_8, lotRow_9_16, lotRow_17_20 ];

export default lotRowsSrvc;
