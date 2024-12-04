import React from 'react';
import styled from 'styled-components';
import Image from '../../Atoms/Image/Image';

const StarContainer = styled.div`
  background: #262E38;
  padding: 8px;
  border-radius: 100%;
`;

const StarIcon = ({ src, alt }) => (
  <StarContainer>
    <Image $width="16.7px" $height="16px" src={src} alt={alt} />
  </StarContainer>
);

export default StarIcon;