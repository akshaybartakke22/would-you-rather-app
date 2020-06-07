export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';


export function receiveUsers(users) {
    return {
        type: RECEIVE_USERS,
        users,
    }
}

export function reciverQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}