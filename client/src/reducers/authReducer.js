const initialState = {
    isLoggedIn: false
}

export default function(state = initialState, action) {
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}