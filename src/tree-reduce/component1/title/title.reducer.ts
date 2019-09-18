import { qs, replace } from 'push_fw'
import { IState } from '../../..'
import { Title } from '../../../components/component1/title/title.component'
import { IAction } from '../../../state-reduce/state-reduce.reducer'

export const title = (state: IState, action: IAction) =>
  action.type === 'CHANGE_TITLE'
    ? replace(qs('[data-id="title"]'), Title({ state }))
    : undefined
