import React, { useState, Fragment } from 'react';
import PhotoSwipeWrapper from './my-photos.js';


export default function Gallery () {
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

            <iframe width="560" height="315" src="https://www.youtube.com/embed/2fngvQS_PmQ "       allowfullscreen="allowfullscreen"
                                                                                                     mozallowfullscreen="mozallowfullscreen"
                                                                                                     msallowfullscreen="msallowfullscreen"
                                                                                                     oallowfullscreen="oallowfullscreen"
                                                                                                     webkitallowfullscreen="webkitallowfullscreen"
                                                                                                     frameborder="0"
                                                                                                     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"></iframe>

          </div>
        ))}
      </div>
      <PhotoSwipeWrapper isOpen={isOpen} index={index} items={items} onClose={handleClose} />
    </Fragment>
  );
};