import { API_CALL_FINISHED } from './api-action-types';

const apiCallFinished = (response, stateKey) => ({
    type: API_CALL_FINISHED,
    response,
    stateKey,
});

export default apiCallFinished;
