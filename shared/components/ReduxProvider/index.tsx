import { Store } from '@reduxjs/toolkit';
import * as React from 'react';
import { Provider } from 'react-redux'

interface Props {
  children: React.ReactNode;
  reduxStore: Store;
}

export const ReduxProvider = ({ children, reduxStore }: Props) => (
  <Provider store={reduxStore}>{children}</Provider>
)
