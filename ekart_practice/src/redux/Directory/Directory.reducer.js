import Category from "./Directory.data";

const INITIAL_STATE = {
    section : Category
}

const directoryReducer = (state = INITIAL_STATE , action) => {
    switch (action.type)
    {
        default:
            return state;
    }
}

export default directoryReducer