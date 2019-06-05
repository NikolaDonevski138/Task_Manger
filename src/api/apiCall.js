import axios from 'axios';
import apiConfig from '../api/apiConfig';
import apiCallFinished from './api-call-finished';
import apiCallError from './api-call-error';
import apiCallStarted from './api-call-started';

const apiCall = (dispatch, stateKey, request = {}, queryString = '') => {
    const headers = {
        'Content-Type': 'application/json',
    };
    
    dispatch(apiCallStarted(stateKey));

    if (
        !apiConfig[stateKey] ||
        typeof apiConfig[stateKey] === 'undefined'
    ) {
        return dispatch(
            apiCallError({
                error: `There is no api endpoint in the configuration with name: ${stateKey}`
            }, stateKey)
        );
    }

    switch (apiConfig[stateKey].method) {
        case 'GET': {
            return () => {
                axios.get(apiConfig[stateKey].url + queryString, {
                    headers
                })
                    .then(response => {
                        dispatch(apiCallFinished(response, stateKey));
                    })
                    .catch(err => {
                        dispatch(apiCallError(err, stateKey));
                    });
            }
        }
        default:
            return dispatch(
                apiCallError({
                    error: 'An error has occurred.'
                }, apiConfig[stateKey])
            );
    }
};

export default apiCall;
