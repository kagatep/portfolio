import React from 'react';
import { SKILLSET } from './content';

const columnLength = Math.floor(SKILLSET.length / 3);
const columns = SKILLSET.reduce((resultArray, item, index) => {
  const chunkIndex = Math.floor(index / columnLength);

  if (!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [];
  }

  resultArray[chunkIndex].push(item);

  return resultArray;
}, []);

const Skillset = () => (
  <div>
    <h3 className="mb-2">Skillset</h3>
    <div className="md:flex text-lg">
      {columns.map((column, i) => (
        <div className="flex-1" key={`column${i}`}>
          {column.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      ))}
    </div>
  </div>
);

export default Skillset;
