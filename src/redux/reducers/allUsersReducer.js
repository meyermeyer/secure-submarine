const allUsersReducer = (state = {}, action) => {
    console.log('in allUsersReducer', action.payload);
    
    switch (action.type) {
        case 'SET_ALL_USERS':
            return action.payload;
        default:
            return state;
    }
};

export default allUsersReducer;