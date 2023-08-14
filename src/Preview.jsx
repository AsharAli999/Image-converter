import React from 'react';

const Preview = ({ imageUrl }) => {
  return (
    <div className="w-32 h-32 overflow-hidden">
      {imageUrl && (
        <img
          src={imageUrl}
          alt="Preview"
          className="w-full h-full object-cover"
        />
      )}
    </div>
  );
};

export default Preview;
