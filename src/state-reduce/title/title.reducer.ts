import { IState } from '../../'
import { IAction } from '../state-reduce.reducer'

export const title = (state: IState, action: IAction) => {
  return action.type === 'CHANGE_TITLE'
    ? action.to
    : state.title
}
