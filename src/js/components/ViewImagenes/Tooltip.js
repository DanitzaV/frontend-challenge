import React from 'react';
import ReactTooltip from 'react-tooltip';

const Tooltips = () => {
    return (
      <ReactTooltip globalEventOff='click' id='soclose'
        getContent={(e) => {
          return <div>{e}</div>
        }} />
    );
}
export default Tooltips;
