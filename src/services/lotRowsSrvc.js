import LotRow from '../models/LotRow';

const lotsList = [
    {
        id: 1,
        across: null
    },
    {
        id: 2,
        across: null
    },
    {
        id: 3,
        across: null
    },
    {
        id: 4,
        across: null
    },
    {
        id: 5,
        across: 12
    },
    {
        id: 6,
        across: 11
    },        {
        id: 7,
        across: 10
    },
    {
        id: 8,
        across: 9
    },
    {
        id: 9,
        across: 8
    },
    {
        id: 10,
        across: 7
    },
    {
        id: 11,
        across: 6
    },
    {
        id: 12,
        across: 5
    },
    {
        id: 13,
        across: 5
    },
    {
        id: 14,
        across: 5
    },
    {
        id: 15,
        across: 5
    },
    {
        id: 16,
        across: 1
    },        {
        id: 17,
        across: null
    },
    {
        id: 18,
        across: null
    },
    {
        id: 19,
        across: null
    },
    {
        id: 20,
        across: null
    }
];

const lotRow_1_4 = new LotRow();
const lotRow_5_8 = new LotRow();
const lotRow_9_16 = new LotRow();
const lotRow_17_20 = new LotRow();

const populateLotRow = (list, lotRow) => {
  list.forEach((lot) => {
    lotRow.append(lot)
  });
}

populateLotRow(lotsList.slice(0,4), lotRow_1_4);
populateLotRow(lotsList.slice(4,8), lotRow_5_8);
populateLotRow(lotsList.slice(8,16), lotRow_9_16);
populateLotRow(lotsList.slice(16,20), lotRow_17_20);

const lotRows = [ lotRow_1_4, lotRow_5_8, lotRow_9_16, lotRow_17_20 ];

export default lotRows;
