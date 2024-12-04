import styled from 'styled-components';

const Image = styled.img`
  width: ${({ $width }) => $width || '16px'};
  height: ${({ $height }) => $height || '16px'};
`;

export default Image;