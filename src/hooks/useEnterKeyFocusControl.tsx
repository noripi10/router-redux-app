import { useRef, useCallback, FocusEvent } from 'react';

export const useEnterKeyFocusControl = () => {
  const elementMapRef = useRef(new Map<number, HTMLElement>());

  const controller = useCallback(
    (index: number) => {
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

export const useKeyDownControl = () => {
  const refElMap = useRef(new Map<number, HTMLElement>());
  return useCallback(
    (no: number) => ({
      ref: (element: HTMLElement | null) => {
        if (element) {
          refElMap.current.set(no, element);
        }
      },
      onKeyDown: ({ key }: { key: string }) => {
        if (key !== 'Enter') return;
        const sortedIndices = [...refElMap.current.keys()].sort();
        const nextIndex = sortedIndices[sortedIndices.indexOf(no) + 1];
        if (typeof nextIndex === 'number') refElMap.current.get(nextIndex)?.focus();
      },
      onFocus: (e: FocusEvent<HTMLElement>) => {
        e.target.style.background = 'lightyellow';
      },
      onBlur: (e: FocusEvent<HTMLElement>) => {
        e.target.style.background = 'white';
      },
    }),
    [refElMap]
  );
};
