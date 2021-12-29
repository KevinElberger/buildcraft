import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { selectMode, setMode } from '../../slice';

export const EraseButton = () => {
  const dispatch = useDispatch();
  const mode = useSelector(selectMode);
  const setEraseMode = () => {
    dispatch(setMode('ERASE'));
  };

  return (
    <ButtonWrapper className={mode === 'ERASE' ? 'active' : ''} onClick={setEraseMode}>
      <svg width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M10.4101 3.09906L2.88285 10.8361C2.49773 11.232 2.50643 11.8651 2.90229 12.2502L4.92367 14.2168C5.11036 14.3984 5.36054 14.5 5.621 14.5H10.9868C10.994 14.5 10.9999 14.5059 10.9999 14.5131V14.5131C10.9999 14.5248 11.0141 14.5305 11.0222 14.5222L16.434 8.95957C16.8191 8.56372 16.8104 7.93061 16.4145 7.54549L11.8242 3.07963C11.4284 2.69451 10.7953 2.70321 10.4101 3.09906ZM9.5844 16C9.58441 16 9.58441 16 9.58441 16.0001V16.0001C9.5844 16.0001 9.58441 16.0001 9.58441 16.0001H11.3564C11.5615 16.0001 11.7578 15.9172 11.9008 15.7702L17.5091 10.0056C18.4719 9.01592 18.4502 7.43316 17.4605 6.47035L12.8702 2.00449C11.8806 1.04169 10.2978 1.06345 9.335 2.05308L1.80772 9.79016C0.844915 10.7798 0.866669 12.3626 1.85631 13.3254L4.38667 15.7871C4.52702 15.9237 4.71512 16.0001 4.91093 16.0001H6.75662C6.75663 16.0001 6.75663 16.0001 6.75663 16.0001V16.0001C6.75662 16 6.75663 16 6.75663 16H9.5844Z" fill="black"/>
        <line x1="4.53033" y1="8.46967" x2="11.5303" y2="15.4697" stroke="black" strokeWidth="1.5"/>
      </svg>
    </ButtonWrapper>
  )
}

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
