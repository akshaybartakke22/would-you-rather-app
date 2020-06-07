import { getAppInitialData } from '../utils/api';
import { receiveUsers } from './users'
import { receiveQuestions } from './questions'

export function handleInitialData() {
    return (dispatch) => {
        return getAppInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(receiveQuestions(questions))
            } )
    }
}