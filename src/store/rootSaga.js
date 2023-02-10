import { all, spawn, call } from 'redux-saga/effects';
import { watchPostsSaga } from './modules/posts/saga';

export default function* allSagas() {
    const sagas = [
        watchPostsSaga
    ];

    yield all(
        sagas.map(saga =>
            spawn(function* () {
                while (true) {
                    try {
                        yield call(saga);
                        break;
                    } catch (e) {
                        console.error(`Error ${e}`);
                    }
                }
            })
        )
    );
}
