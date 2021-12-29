import * as React from 'react';
import styled from 'styled-components';
import { DeleteButton } from '../map/components/DeleteButton';
import { EditButton } from '../map/components/EditButton';
import { EraseButton } from '../map/components/EraseButton';

const header: React.FC = () => {
  return (
    <Wrapper>
      <ButtonContainer>
        <EditButton />
        <EraseButton />
        <DeleteButton />

        <Divider></Divider>
      </ButtonContainer>
    </Wrapper>
  );
}

export default header;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 12px 24px;
  justify-content: center;
  background: ${({ theme }) => theme.white};
  border-bottom: 1px solid ${({ theme }) => theme.lightgrey};
`;

const ButtonContainer = styled.div`
  display: grid;
  grid-gap: 12px;
  grid-auto-flow: column;
`;

const Divider = styled.div`
  width: 1px;
  height: 100%;
  background: ${({ theme }) => theme.lightgrey};
`;
