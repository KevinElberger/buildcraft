import { Download } from '@styled-icons/octicons';
import * as React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { Small } from '../../../../shared/components/Small';
import { selectMapState } from '../../../map/slice';

export const ExportButton: React.FC = () => {
  const map = useSelector(selectMapState);

  return (
    <Wrapper>
      <Small>Export</Small>
      <ButtonWrapper role="button" href={`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(map))}`} download="map.json">
        <Download size={16} />
      </ButtonWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ButtonWrapper = styled.a`
  width: 40px;
  height: 40px;
  display: grid;
  cursor: pointer;
  border-radius: 8px;
  place-items: center;

  &:hover {
    background: ${({ theme }) => theme.bgGrey};
  }
`;

