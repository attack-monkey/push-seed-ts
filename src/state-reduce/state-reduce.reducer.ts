import { IState } from '..'
import { title } from './title/title.reducer'

export interface IAction {
  type: string,
  [key: string]: any
}
export const stateReduce = (state: IState, action: IAction) => ({
  title: title(state, action)
})
