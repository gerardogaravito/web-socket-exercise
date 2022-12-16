import { ReactNode, useEffect, useRef } from 'react';

const usePrevious = (value: ReactNode) => {
  const ref = useRef<ReactNode>();

  useEffect(() => {
    ref.current = value;
  });

  return ref.current;
};

export default usePrevious;
