import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';

const GalleryCont = styled.div`
  background-color: ${props => props.theme.main.primaryColor};
  margin-bottom: 2rem;
`

export default ({ images })=> {
  console.log(images);
  const gallery = images.map(item => ({ original: item, thumbnail: item }));
  return(
    <GalleryCont>
      <ImageGallery
        items={gallery}
        showPlayButton={false}
      />
    </GalleryCont>
  )
}