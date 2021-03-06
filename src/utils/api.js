import {
  _getUsers,
  _getQuestions,
} from './_DATA.js'

export function getAppInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([users, questions]) => ({
    users,
    questions,
  }))
}