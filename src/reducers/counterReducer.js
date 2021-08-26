const reduser = (state, action) => {
    switch (action.type) {
        case "INC" : {
            return {...state, counter: state.counter + 10}
        }
        case "DEC" : {
            return {...state, counter: state.counter - 2}
        }
        case "CLEAR" : {
            return {...state, counter: 0}
        }
        default: {console.log("wrong action", action.type)
        return state
        }
    }
}
export default reduser;