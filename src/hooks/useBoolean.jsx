import { useState, useMemo } from 'react';

export const useBoolean = (initState) => {
  const [bool, setBool] = useState(initState);

  const controller = useMemo(() => {
    const True = () => setBool(true);
    const False = () => setBool(false);
    const Toggle = () => setBool((prev) => !prev);

    return { True, False, Toggle };
  }, []);

  return [bool, controller];
};
