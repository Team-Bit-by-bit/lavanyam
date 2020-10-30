import React, { useState, useCallback } from 'react';
import Gallery from 'react-photo-gallery';
import Carousel from 'react-images';
import { photos } from './photos';

import IconButton from '@material-ui/core/IconButton';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

// Changes required
//     Component should appear with proper padding on all four sides
//     Add a button in selection view to see the list of all garments in currently viewed picture
//     Add two buttons to (i)transer garment (ii)transfer shape (iii)transfer colour of garment selected in photo
//     Add a proper button to switch from selection view to gallery view (currently shopping cart icon button used)

export default function ImageCarousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };



  const galleryView = () => (
    <div style={{ backgroundColor: 'black' }}>
      <Gallery photos={photos} onClick={openLightbox} />
    </div>
  );

  const selectionView = () => (
    <div style={{ backgroundColor: 'black' }}>
      <Carousel
        currentIndex={currentImage}
        views={photos.map(x => ({
          ...x,
          srcset: x.srcSet,
          caption: x.title
        }))}
      />

      {/* returns back to gallery view mode, put appropriate icon */}
      <IconButton color="secondary" onClick={closeLightbox}>
        <AddShoppingCartIcon /> 
      </IconButton>

    </div>
  );

  return viewerIsOpen? selectionView(): galleryView();
}
