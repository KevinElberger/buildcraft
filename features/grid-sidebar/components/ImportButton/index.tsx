import * as React from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Upload } from '@styled-icons/octicons';
import { Small } from '../../../../shared/components/Small';
import { uploadNewMap } from '../../../map/slice';

export const ImportButton: React.FC = () => {
  const dispatch = useDispatch();
  const uploadMap = (e: any) => {
    const fileReader = new FileReader();

    if (!e.target.files.length) return;

    fileReader.readAsText(e.target.files[0], 'UTF-8');

    fileReader.onerror = e => {
      // TODO: Error notification
      console.error('An error occurred when trying to parse the JSON file: ', e);
    };
    fileReader.onload = e => {
      dispatch(uploadNewMap(JSON.parse(e.target?.result as string)));
    };

  };

  const showOpenFileDialog = () => inputRef.current?.click();
  const inputRef = React.useRef(null) as React.MutableRefObject<null | HTMLInputElement>;

  return (
    <Wrapper>
      <Small>Import</Small>

      <input ref={inputRef} type="file" accept="application/JSON" onChange={uploadMap} />

      <ButtonWrapper role="button" onClick={showOpenFileDialog}>
        <Upload size={16} />
      </ButtonWrapper>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  input {
    display: none;
  }
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

