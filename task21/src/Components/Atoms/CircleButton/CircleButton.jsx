import styled from 'styled-components';

const CircleButton = styled.button`
  width: 56px;
  height: 56px;
  background-color: ${({ $isSelected }) => ($isSelected ? '#FC7614' : '#262E38')};
  color: white;
  border: none;
  border-radius: 50%;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  &:hover {
    background-color: ${({ $isSelected }) => ($isSelected ? '#FC7614' : '#7C8798')};
  }
`;

export default CircleButton;