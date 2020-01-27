export default (state = [], action = null) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];
        default:
            return state;
    }
};