import { watchFetchMyCrushes, watchAddCrush, watchFetchCrushesOnMe } from './crush';
import { watchFetchSession } from './user';
import { all } from 'redux-saga/effects'

export default function* rootSaga() {
  yield all([
    watchFetchMyCrushes(),
    watchFetchCrushesOnMe(),
    watchAddCrush(),
    watchFetchSession()
  ])
};
