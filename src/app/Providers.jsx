'use client';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { useRef } from 'react';

export function Providers({ children }) {
  const storeRef = useRef();
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}