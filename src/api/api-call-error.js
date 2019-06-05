import { API_CALL_ERROR } from './api-action-types';

const apiCallError = (error, stateKey) => ({
    type: API_CALL_ERROR,
    error,
    stateKey,
});

export default apiCallError;
