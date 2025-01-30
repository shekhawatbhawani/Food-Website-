import React from 'react';
import { CDN_LINK } from '../../Common/Constant';

const ImageCard = ({ img }) => {
  return (
    <div>
      <img src={CDN_LINK + img} alt="Image" className='w-40 shadow-md rounded-full p-3'/>
    </div>
  );
};

export default ImageCard;
