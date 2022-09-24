import { useNavigate, createSearchParams } from "react-router-dom";

export const useNavigateSearch = () => {
  const navigate = useNavigate();
  return (pathname, params, state) =>
    navigate({ pathname, search: `?${createSearchParams(params)}`, state });
};
