import { Rows } from '@styled-icons/octicons';
import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { NumberInput } from '../../../../shared/components/NumberInput';
import { selectMode, setMode } from '../../slice';

interface Props {
  rows: number;
  onChange: Function;
}

export const RowButton = ({ rows, onChange }: Props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <Wrapper>
      <ButtonWrapper role="button" onClick={() => setShowMenu(!showMenu)} className={showMenu ? 'active' : ''}>
        <Rows size={16} />
      </ButtonWrapper>

      {showMenu && (
        <Menu className={showMenu ? 'open' : ''}>
          <NumberInput number={rows} onChange={onChange} />
        </Menu>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const ButtonWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;

  &:hover,
  &.active  {
    background: ${({ theme }) => theme.bgGrey};
  }
`;

const FadeInUp = keyframes`
  0% {
    transform: translate3d(0,20px,0);
  }
  100% {
    transform: translate3d(0,0,0);
    opacity: 1;
  }
`;

const Menu = styled.div`
  opacity: 0;
  border-radius: 8px;
  width: max-content;
  position: absolute;
  bottom: 48px;
  background: ${({ theme }) => theme.white};

  &.open {
    animation: ${FadeInUp} 0.3s forwards;
  }
`;

