import React, { useState, Fragment } from 'react';
import PhotoSwipeWrapper from './my-photos.js';
import minion from '../photos/minion.png';
import Photo from './photo.js'

export default function PhotoGallery () {
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const items = [
    {
      src: 'https://placekitten.com/600/400',
      w: 600,
      h: 400
    },
    {
      src: 'https://placekitten.com/1200/900',
      w: 1200,
      h: 900
    }
  ];

  const handleOpen = index => {
    setIsOpen(true);
    setIndex(index);
  };

  const handleClose = () => {
    setIsOpen(false);
  };



  return (
    <Fragment>
      <div>
        {items.map((item, i) => (
          <div
            key={i}
            onClick={() => {
              handleOpen(i);
            }}
          >

             <Photo
                  folder=""
                  image={minion}
                  name="Test with minion"
                   />

          </div>
        ))}
      </div>
      <PhotoSwipeWrapper isOpen={isOpen} index={index} items={items} onClose={handleClose} />
    </Fragment>
  );
};