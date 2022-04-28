import { createActions, createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

export const { Types, Creators } = createActions({
  etlInit: [],
  etlRequest: [],
  etlSuccess: ['data'],
  etlError: ['err'],
  getEtl: [],
  putEtl: ['filter']
});

/** --------------------------------
 * Variable declarations
 * --------------------------------- */

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: false
});

/* Reducers */

export const init = state => state.merge({ data: [] });

export const request = state => state.merge({ loading: true });

export const success = (state, { data }) => state.merge({ data, error: false, loading: false });

export const error = state => state.merge({ loading: false, error: true });

/* Reducers to types */

export default createReducer(INITIAL_STATE, {
  [Types.ETL_INIT]: init,
  [Types.ETL_REQUEST]: request,
  [Types.ETL_SUCCESS]: success,
  [Types.ETL_ERROR]: error
});