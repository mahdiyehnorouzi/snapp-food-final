// @ts-nocheck
import { useDispatch, useSelector } from "react-redux";
import fetchData from "../api/fetch-data";
import type { VendorState } from "../store/vendor-reducer";

export function useSnappfoodData() {
  const dispatch = useDispatch();
  const { data, loading, error, query, hasNextPage } = useSelector<
    VendorState,
    Partial<VendorState>
  >((data) => data);

  const loadData = () => dispatch(fetchData({ data, query }));

  return { data, loading, error, loadData, query, hasNextPage };
}
