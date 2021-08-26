const reducer = (state, action) => {
    switch (action.type) {
        case'INC': {

            return {...state, [action.payload]: state[action.payload]++}
        }
        case'DEC': {
            return {...state, [action.payload]: state[action.payload]--}
        }
        default: {
            console.log("wrong action", action.type)
            return state
        }
    }
}
export default reducer;