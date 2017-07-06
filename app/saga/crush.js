import { fetchMyCrushesSuccess, fetchCrushesOnMeSuccess } from 'actions/crushes';
import { requestFailed } from 'actions/fail';
import request from 'superagent-bluebird-promise';
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchMyCrushes() {
  try {
    const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes`;
    const response  = yield call(() => request.get(api).set('Authorization', localStorage.getItem('Authorization'))
)
    yield put(fetchMyCrushesSuccess(response.body))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchFetchMyCrushes() {
  yield takeEvery('FETCH_MY_CRUSHES_REQUEST', fetchMyCrushes)
}

function* fetchCrushesOnMe() {
  try {
    const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes-on-me-count`;
    const response = yield call(() => request.get(api).set('Authorization', localStorage.getItem('Authorization')))
    yield put(fetchCrushesOnMeSuccess(response.body))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchFetchCrushesOnMe() {
  yield takeEvery('FETCH_CRUSHES_ON_ME_REQUEST', fetchCrushesOnMe)
}

function* addCrush(crushURL) {
  try {
    const api = `http://localhost:4567/api/users/${cookies.get('appUserID')}/crushes`;
    const response  = yield call(() => request.post(api).set('Authorization', localStorage.getItem('Authorization')).send(crushURL))
    yield put(addCrushSuccess(response.body))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchAddCrush() {
  yield takeEvery('ADD_CRUSH_REQUEST', addCrush())
}
