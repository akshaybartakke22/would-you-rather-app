import { getAppInitialData } from '../utils/api';
import {receiveUsers , reciverQuestions} from './users'

export function handleInitialData() {
    return (dispatch) => {
        return getAppInitialData()
            .then(({ users, questions }) => {
                dispatch(receiveUsers(users));
                dispatch(reciverQuestions(questions))
            } )
    }
}