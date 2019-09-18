import h = require('hyperscript')
import { IState } from '../../..'

interface IProps {
  state: IState
}
export const Title = ({ state }: IProps) =>
  h('h1', state.title, { 'data-id': 'title' })
