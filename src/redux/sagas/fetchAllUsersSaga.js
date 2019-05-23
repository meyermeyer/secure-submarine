import axios from 'axios';
import { put } from 'redux-saga/effects';

function* fetchAllUsers(){
    try {
        const allUsers = yield axios.get('/api/users')
        yield put({ type: 'SET_ALL_USERS', payload: allUsers.data });
    }
    catch(error) {
        console.log('fetchAllUsers GET failed', error);
    }
}

export default fetchAllUsers;