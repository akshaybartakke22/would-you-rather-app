export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';


export function setUser(authUser) {
    return {
        type: SET_AUTHED_USER,
        authUser,
    }
}

export function resetUser() {
    return {
        type: RESET_AUTHED_USER,
    }
}