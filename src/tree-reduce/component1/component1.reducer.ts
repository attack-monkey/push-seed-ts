import { IState } from '../..'
import { IAction } from '../../state-reduce/state-reduce.reducer'
import { title } from './title/title.reducer'

export const component1 = (state: IState, action: IAction) =>
  title(state, action)
