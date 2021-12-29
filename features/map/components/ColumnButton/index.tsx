import { Columns } from '@styled-icons/octicons';
import * as React from 'react';
import styled from 'styled-components';
import { NumberInput } from '../../../../shared/components/NumberInput';

interface Props {
  cols: number;
  onChange: Function;
}

export const ColumnButton = ({ cols, onChange }: Props) => {
  return (
    <Wrapper>
      <ButtonWrapper role="button">
        <Columns size={16} />
      </ButtonWrapper>

      <NumberInput number={cols} onChange={onChange} />
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
