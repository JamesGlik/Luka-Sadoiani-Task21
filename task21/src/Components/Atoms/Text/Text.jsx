import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: white;
  margin-bottom: 7px;
  margin-top:46px;
`;

export const Paragraph = styled.p`
  font-size: 15px;
  color: #969FAD;
  width: ${({ $width }) => $width || '100%'};
  margin: ${({ $margin }) => $margin || '0'};
  line-height: 1.5; 
`;