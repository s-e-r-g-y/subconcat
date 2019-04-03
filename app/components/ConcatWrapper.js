import React from 'react';

import { LEFT_SUBTITLE, RIGHT_SUBTITLE } from './../constants';

const ConcatWrapper = () => {
  const combineSubtitles = () => {
    let left = LEFT_SUBTITLE;
    let right = RIGHT_SUBTITLE;
    let result = '';

    left = left.split('\n\n');
    right = right.split('\n\n');

    let counter = 0;
    for (let i = 0; i < left.length; i += 1) {
      let flag = false;
      const litem = left[i].split('\n');
      for (let j = 0; j < right.length; j += 1) {
        const ritem = right[j].split('\n');
        if (litem[1] === ritem[1]) {
          result += `${counter}) ${litem.slice(2).join(' ')} --> ${ritem.slice(2).join(' ')} \n\n`;
          flag = true;
          break;
        }
      }

      if (flag) {
        counter += 1;
      }
    }

    return result;
  };

  const style = {
    width: 354,
    height: 800,
    margin: 8,
  };

  const result = combineSubtitles();

  return (
    <div>
      <textarea style={style} value={LEFT_SUBTITLE} />
      <textarea style={style} value={RIGHT_SUBTITLE} />
      <textarea style={style} value={result} />
    </div>
  );
};

export default ConcatWrapper;
