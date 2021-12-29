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
  return (
    <Wrapper>
      <ButtonWrapper role="button">
        <Rows size={16} />
      </ButtonWrapper>

      <NumberInput number={rows} onChange={onChange} />
    </Wrapper>
  );
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


