import type { ActionCreator, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import httpClient from "../services/http";
import type { VendorAction, VendorState } from "../store/vendor-reducer";
import { Vendor } from "@/types/vendor";

export type VendorThunkAction = ThunkAction<
  Promise<VendorAction>,
  VendorState,
  void,
  any
>;

const fetchData: ActionCreator<
  ThunkAction<Promise<VendorAction>, VendorState, void, any>
> = (state: VendorState) => {
  return async (dispatch: Dispatch<VendorAction>) => {
    dispatch({ type: "FETCH_DATA_REQUEST" });

    const currentPage = state.query.page;
    const nextPage = state.query.page + 1;
    const page_size = state.query.page_size;

    try {
      const response = (await httpClient.get(
        `mobile/v3/restaurant/vendors-list?page=${
          !state.data ? currentPage : nextPage
        }&page_size=${page_size}`
      )) as {
        data: Vendor[];
        total: number;
      };

      return dispatch({
        type: "FETCH_DATA_SUCCESS",
        payload: {
          total: response.total,
          data: response.data,
          query: {
            page: nextPage,
            page_size: page_size,
          },
        },
      });
    } catch (error) {
      return dispatch({ type: "FETCH_DATA_FAILURE", payload: error.message });
    }
  };
};

export default fetchData;
