import { createSelector } from "reselect";

const selectUser = state => state.user;

export const userDetail = createSelector(
    [selectUser] ,
    user => user.User
)


export const userDName = createSelector(
    [userDetail],
    User => User.displayName,
)

export const hiddenDropdown = createSelector(
    [selectUser],
    user => user.hidden
)