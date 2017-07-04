
import { fetchSessionSuccess } from 'actions/user';
import { requestFailed } from 'actions/fail';
import request from 'superagent-bluebird-promise';
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchSession() {
  try {
    const api = `http://localhost:4567/api/users/session`;
    const response  = yield call(() => request.get(api).set('Authorization', localStorage.getItem('Authorization')));
    yield put(fetchSessionSuccess(response.body))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchFetchSession() {
  yield takeEvery('FETCH_SESSION', fetchSession)
}
