import { API_CALL_STARTED } from './api-action-types';

const apiCallStarted = (stateKey) => ({
    type: API_CALL_STARTED,
    stateKey,
});

export default apiCallStarted;
