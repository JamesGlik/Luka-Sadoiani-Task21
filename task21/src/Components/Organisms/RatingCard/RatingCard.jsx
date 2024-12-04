import React, { useState } from 'react';
import styled from 'styled-components';
import StarIcon from '../../Molecules/StarIcon/StarIcon';
import { Title, Paragraph } from '../../Atoms/Text/Text';
import NumberSelector from '../../Molecules/NumberSelector/NumberSelector';
import Button from '../../Atoms/Button/Button';
import starImage from '../../../assets/Star.png';


const Card = styled.div`
  width: 412px;
  height: 416px;
  background: linear-gradient(145deg, #232A34, #181E27);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  padding: 24px;
  color: white;
  box-sizing: border-box;

  @media (max-width: 768px) {
    width: 327px;
    height: 360px;
  }
`;


const StyledTitle = styled(Title)`
  font-size: 28px;
  color: white;
  font-weight: bold;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;


const StyledParagraph = styled(Paragraph)`
  font-size: 15px;
  color: #969FAD;
  width: ${({ $width }) => $width || '100%'};
  margin: ${({ $margin }) => $margin || '0'};
  line-height: 1.5;

  @media (max-width: 768px) {
    font-size: 13px;
    width: 279px;  
  }
`;


const StyledButton = styled(Button)`
  width: 341px;
  height: 45px;
  background-color: #FC7614;
  border: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  border-radius: 22.5px;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: #FC7614;
  }

  @media (max-width: 768px) {
    width: 279px;
    height: 45px;
  }
`;


const StyledNumberSelector = styled(NumberSelector)`
  .number-background {
    width: 48px;
    height: 48px;

    @media (max-width: 768px) {
      width: 40px; 
      height: 40px;  
    }
  }
`;

const RatingCard = () => {
  const [selected, setSelected] = useState(null);

  const handleSelect = (value) => {
    setSelected(value);
  };

  const handleSubmit = () => {
    console.log(`Rating submitted: ${selected}`);
    setSelected(null);
  };

  return (
    <Card>
      <StarIcon src={starImage} alt="Star" />
      <StyledTitle>How did we do?</StyledTitle>
      <StyledParagraph $width="340px" $margin="16px 0 24px 0">
        Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
      </StyledParagraph>
      <StyledNumberSelector
        numbers={[1, 2, 3, 4, 5]}
        selected={selected}
        onSelect={handleSelect}
      />
      <StyledButton onClick={handleSubmit}>Submit</StyledButton>
    </Card>
  );
};

export default RatingCard;