import { IState } from '..'
import { IAction } from '../state-reduce/state-reduce.reducer'
import { component1 } from './component1/component1.reducer'

export const treeReduce = (state: IState, action: IAction) =>
  component1(state, action)
