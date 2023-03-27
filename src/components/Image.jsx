/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import logo from '../img/mahiro.gif';

function ImageProto() {
  const [showImage, setShowImage] = useState(false);

  return (
    <div>
      {showImage  && <img src={logo} alt="Sample Image" width={'300px'}/>}
      <br />
      <button onClick={() => setShowImage(!showImage)}>
        {showImage  ? 'Hide Image' : 'Show Image'}
      </button>
    </div>
  );
}

export default ImageProto;