const initialState = {
    users: [],
    loading: false,
    error: null,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_REQUEST":
            return { ...state, loading: true }
        case 'FETCH_SUCCESS':
            return { ...state, users: action.payload, loading: false };
        case 'FETCH_FAILURE':
            return { ...state, error: action.error, loading: false };
        default:
            return state;
    }
}

export default userReducer