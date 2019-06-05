const usersReducerDefaultState = {
    allEmployees: {
        isLoading: false,
        isLoaded: false,
        isError: false,
    },
};

const apiCalls = (state = usersReducerDefaultState, action) => {
    switch (action.type) {
        case 'API_CALL_FINISHED':
            state[action.stateKey] = action.response;
            state[action.stateKey] = {
                ...state[action.stateKey],
                isLoading: false,
                isLoaded: true,
                isError: false,
            };
            //state.set(action.stateKey, action.response);
            console.log('STATE FROM API CALL FINISHED', state);
            return state;
        case 'API_CALL_ERROR':
            state[action.stateKey] = action.error;
            state[action.stateKey] = {
                ...state[action.stateKey],
                isLoading: false,
                isLoaded: false,
                isError: true,
            };
            return state;
        case 'API_CALL_STARTED':
            state[action.stateKey] = {
                isLoading: true,
                isLoaded: false,
                isError: false,
                // data: [],
            };
            return state;
        default:
            return state;
    }
}

export default apiCalls;
