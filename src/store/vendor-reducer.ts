import type { Reducer } from "redux";
import type { Vendor } from "../types/vendor";

const initialState: VendorState = {
  hasNextPage: true,
  query: {
    page: 0,
    page_size: 20,
  },
  data: null,
  error: null,
  loading: false,
};

type Error = Record<string, any> | null;

type Query = {
  page: number;
  page_size: number;
};

export type VendorState = {
  hasNextPage: boolean;
  query: Query;
  data: Vendor[] | null;
  error: Error;
  loading: boolean;
};

export type VendorAction =
  | { type: "FETCH_DATA_REQUEST" }
  | {
      type: "FETCH_DATA_SUCCESS";
      payload: {
        data: Vendor[];
        query: Query;
      };
    }
  | { type: "FETCH_DATA_FAILURE"; payload: Error };

const reducer: Reducer<VendorState, VendorAction> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        loading: false,
        data: Boolean(state.data?.length)
          ? state.data.concat(action.payload.data)
          : action.payload.data,
        query: {
          page_size: action.payload.query.page_size,
          page: action.payload.query.page,
        },
        hasNextPage: !(action.payload.data.length < state.query.page_size),
      };
    case "FETCH_DATA_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default reducer;
