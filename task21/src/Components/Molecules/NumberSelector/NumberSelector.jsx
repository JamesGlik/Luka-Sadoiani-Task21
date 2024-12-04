import React from 'react';
import styled from 'styled-components';
import CircleButton from '../../Atoms/CircleButton/CircleButton';

const NumbersContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 340px;
`;

const NumberSelector = ({ numbers, selected, onSelect }) => (
  <NumbersContainer>
    {numbers.map((num) => (
      <CircleButton
        key={num}
        $isSelected={selected === num}
        onClick={() => onSelect(num)}
      >
        {num}
      </CircleButton>
    ))}
  </NumbersContainer>
);

export default NumberSelector;