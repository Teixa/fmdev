import api from '../../services/api';
import { Creators } from '../ducks/etl';
import { call, put } from 'redux-saga/effects';
import { actions as toastrActions } from 'react-redux-toastr';

export function* getEtl() {
  try {
    yield put(Creators.etlRequest());
    const response = yield call(api.get, 'etl');

    yield put(Creators.etlSuccess(response.data));
  } catch (err) {
    yield put(Creators.etlError({ err }));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro',
      message: 'Falha ao listar ETL'
    }));
  }
}

export function* putEtl({ filter }) {
  try {
    yield put(Creators.etlRequest());
    const response = yield call(api.put, 'etl', filter);

    yield put(Creators.etlSuccess(response.data));

    yield put(toastrActions.add({
      type: 'success',
      title: 'Sucesso',
      message: 'Fonte de dados alterada com sucesso!'
    }));

  } catch (err) {
    yield put(Creators.etlError({ err }));
    yield put(toastrActions.add({
      type: 'error',
      title: 'Erro',
      message: 'Falha ao atualizar ETL'
    }));
  }
}