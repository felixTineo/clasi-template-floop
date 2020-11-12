import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import styled from 'styled-components';
import './gallery.css';

const GalleryCont = styled.div`
  background-color: ${props => props.theme.primaryColor};
  margin-bottom: 2rem;
`

export default ({ images })=> {
  console.log("IMAGES",images);
  const gallery = images.map(item => ({ original: item.url, thumbnail: item.url }));
  return(
    <GalleryCont>
      <ImageGallery
        items={gallery}
        showPlayButton={false}
      />
    </GalleryCont>
  )
}