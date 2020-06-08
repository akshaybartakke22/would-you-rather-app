import { getAppInitialData } from "../utils/api";
import { receiveUsers, addUserQuestion } from "./users";
import { receiveQuestions, addNewQuestion } from "./questions";
import { _saveQuestionAnswer, _saveQuestion } from "../utils/_DATA";

export function handleInitialData() {
  return (dispatch) => {
    return getAppInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

// add question to user list and question list
export function handleAddNewQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser,
    }).then((question) => {
      dispatch(addUserQuestion(authedUser, question.id));
      dispatch(addNewQuestion(question));
    });
  };
}
