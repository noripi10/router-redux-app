import { useRef, useCallback } from 'react';

export const useEnterKeyFocusControl = () => {
  const elementMapRef = useRef(new Map<number, HTMLElement>());

  const controller = useCallback(
    (index: number) => {
      console.log({ elementMapRef });

      const onKeyDown = ({ key }: { key: string }) => {
        if (key === 'Enter') {
          const sortedIndices = [...elementMapRef.current.keys()].sort();
          const nextIndex = sortedIndices[sortedIndices.indexOf(index) + 1];
          if (typeof nextIndex === 'number') elementMapRef.current.get(nextIndex)?.focus();
        }
      };

      const ref = (element: HTMLElement | null) => {
        if (element) elementMapRef.current.set(index, element);
      };

      return { onKeyDown, ref };
    },
    [elementMapRef]
  );

  return controller;
};
