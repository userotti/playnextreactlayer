export function fetchUser() {
    return {
        type: "FETCH_USER_FULFILLED",
        payload: {
            name: "Christian",
            age: 35
        }
    }
}

export function setUserName(name) {
    return {
        type: "SET_USER_NAME",
        payload: name
    }
}

export function setUserAge(name) {
    return {
        type: "SET_USER_AGE",
        payload: age
    }
}
