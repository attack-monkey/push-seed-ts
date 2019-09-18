import { dispatch } from 'push_fw'
import { Title } from './title/title.component'

import h = require('hyperscript')
import { IState } from '../..'

interface IProps {
  state: IState
}
export const Component1 = ({ state }: IProps) =>
  h('div',
    Title({ state }),
    h('br'),
    h('input', {
      type: 'text',
      placeholder: 'Enter text here',
      value: state.title,
      oninput: (ev: any) => dispatch({
        type: 'CHANGE_TITLE',
        to: ev.target.value
      })
    })
  )
