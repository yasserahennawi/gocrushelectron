import { fetchMyCrushesSuccess, fetchCrushesOnMeSuccess, addCrushSuccess } from 'actions/crushes';
import { requestFailed } from 'actions/fail';
// import request from 'superagent-bluebird-promise';
import 'whatwg-fetch'
import { call, put, takeEvery } from 'redux-saga/effects'

import { getCrushesOnMe, postCrush } from '../api/crush'
import { getMyCrushes } from '../api/crush.mock';

function checkStatus(response) {
  if (response.status < 200 || response.status > 300) {
    var error = new Error(response)
    error.response = response
    throw error.response
  }
}

function parseJSON(response) {
  return response.json()
}

function* fetchMyCrushes() {
  try {
    const response  = yield call(getMyCrushes);
    yield checkStatus(response);
    const data = yield response.json();
    yield put(fetchMyCrushesSuccess(data));
  } catch (error) {
    const message = yield error.json();
    yield put (requestFailed(message));
  }
}

export function* watchFetchMyCrushes() {
  yield takeEvery('FETCH_MY_CRUSHES_REQUEST', fetchMyCrushes)
}

function* fetchCrushesOnMe() {
  try {
    const response  = yield call(getCrushesOnMe);
    yield checkStatus(response);
    const data = yield response.json();
    yield put(fetchCrushesOnMeSuccess(data));
  } catch (error) {
    const message = yield error.json();
    yield put(requestFailed(message));
  }
}

export function* watchFetchCrushesOnMe() {
  yield takeEvery('FETCH_CRUSHES_ON_ME_REQUEST', fetchCrushesOnMe)
}

function* addCrush(crushUrl) {
  try {
    const response  = yield call(postCrush, crushUrl);
    yield checkStatus(response);
    const data = yield response.json();
    yield put(addCrushSuccess(data));
  } catch (error) {
    const message = yield error.json();
    yield put(requestFailed(message));
  }
}

export function* watchAddCrush() {
  yield takeEvery('ADD_CRUSH_REQUEST', addCrush)
}
