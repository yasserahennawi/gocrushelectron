import { fetchMyCrushesSuccess } from 'actions/crushes';
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
