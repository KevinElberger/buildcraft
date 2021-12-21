import React, { useEffect } from 'react';
import { throttle } from '../../utils/throttle';

export const useMouseMove = (refElement: React.MutableRefObject<null | HTMLElement>, callback: Function, deps: any[] = []) => {
  useEffect(() => {
    const element = refElement?.current;
    const onMouseMove = throttle(callback);

    element?.addEventListener('mousemove', onMouseMove);

    return () => {
      if (element !== null) {
        element.removeEventListener('mousemove', onMouseMove);
      }
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};
