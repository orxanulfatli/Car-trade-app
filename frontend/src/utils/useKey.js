import { useCallback } from "react";

export const useKey = () => {
  const getKey = useCallback(
    (value, index) => encodeURI(`${value},${index}`),
    []
  );

  return getKey;
};
