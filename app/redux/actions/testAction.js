import axios from 'axios';

import { SET_TEST } from './types';

const testDataUrl = 'https://jsonplaceholder.typicode.com/posts/1';

export const setTestData = (testData) => {
    return {
        type: SET_TEST,
        payload: testData
    }
} 

export const getTestData = () => {
    return dispatch => {
        axios.get(testDataUrl)
            .then(response => {
                dispatch(setTestData(response.data))
            })
            .catch(error => {
                dispatch(error)
            });
    }
}