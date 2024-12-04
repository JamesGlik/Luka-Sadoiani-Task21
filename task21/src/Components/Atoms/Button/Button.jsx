import styled from 'styled-components';

const Button = styled.button`
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ $bgColor }) => $bgColor || 'transparent'};
  color: ${({ $color }) => $color || 'white'};
  font-size: ${({ $fontSize }) => $fontSize || '16px'};
  font-weight: 700;
  border: none;
  margin-top:32px;
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: ${({ $hoverBgColor }) => $hoverBgColor || 'white'};
    color: ${({ $hoverColor }) => $hoverColor || '#FC7614'};
  }
`;

export default Button;