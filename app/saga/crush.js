import { fetchMyCrushesSuccess, fetchCrushesOnMeSuccess, addCrushSuccess } from 'actions/crushes';
import { requestFailed } from 'actions/fail';
// import request from 'superagent-bluebird-promise';
import 'whatwg-fetch'
import { call, put, takeEvery } from 'redux-saga/effects'

function* fetchMyCrushes() {
  try {
    const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes`;
    const response  = yield call(() => fetch(api, {
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    })
    .then(res => res.json())
    .catch(error => error)
    .then(data => data)
    )
    yield put(fetchMyCrushesSuccess(response));
  } catch (error) {
    yield put(requestFailed(error))
  }
}

export function* watchFetchMyCrushes() {
  yield takeEvery('FETCH_MY_CRUSHES_REQUEST', fetchMyCrushes)
}

function* fetchCrushesOnMe() {
  try {
    const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes-on-me-count`;
    const response  = yield call(() => fetch(api, {
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    })
    .then(res => res.json())
    .catch(error => error)
    .then(data => data)
    )
    yield put(fetchCrushesOnMeSuccess(response))
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
    const api = `http://localhost:4567/api/users/${localStorage.getItem('appUserID')}/crushes`;
    const response  = yield call(() => fetch(api, {
      method: 'POST',
      body: crushURL.payload,
      headers: {
        'Authorization': localStorage.getItem('Authorization')
      },
    })
    .then(res => res.json())
    .catch(error => error)
    .then(data => data)
    )
    yield put(addCrushSuccess(response))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchAddCrush() {
  yield takeEvery('ADD_CRUSH_REQUEST', addCrush)
}

function* textInputChange(event) {
  try {
    yield put(textInputChangeSuccess(event))
  }
  catch(error) {
    yield put(requestFailed(error))
  }
}

export function* watchTextInputChange() {
  yield takeEvery('TEXT_INPUT_CHANGE', textInputChange)
}
