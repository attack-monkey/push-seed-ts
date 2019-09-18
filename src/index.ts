import { app, qs } from 'push_fw'
import { Component1 } from './components/component1/component1.comp'
import { stateReduce } from './state-reduce/state-reduce.reducer'
import { treeReduce } from './tree-reduce/tree-reduce.reducer'

// This is where the push app will mount to
  // qs is a utility short-hand for document.querySelector
const mount = qs('#app')

// The initial state of the app
export interface IState {
  title: string
}
const initState: IState = {
  title: 'Welcome to push'
}

// This bootstraps the push app with:
// - The initial state of the app
// - The root or outer-most component
// - Where to mount the app (i.e. What html node are we taking over)
// - stateReduce - a function that takes the existing state + an action and produces a new state
// - treeReduce - function that takes the existing state + an action and determines what DOM nodes to replace
app(
  initState,
  Component1,
  mount,
  stateReduce,
  treeReduce
)
