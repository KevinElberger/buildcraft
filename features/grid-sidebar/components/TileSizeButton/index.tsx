import { Diamond } from '@styled-icons/octicons';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { NumberInput } from '../../../../shared/components/NumberInput';
import { selectTileSize, setTileSize } from '../../../map/slice';

export const TileSizeButton: React.FC = () => {
  const dispatch = useDispatch();
  const tileSize = useSelector(selectTileSize);
  const onChange = (newAmount: number) => {
    dispatch(setTileSize(newAmount));
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Diamond size={16} />
      </ButtonWrapper>

      <NumberInput number={tileSize} onChange={onChange} min={19} max={32} />
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  display: grid;
  cursor: pointer;
  margin-right: 12px;
  border-radius: 8px;
  place-items: center;
`;


