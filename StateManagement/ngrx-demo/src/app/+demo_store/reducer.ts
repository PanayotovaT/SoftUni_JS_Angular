export interface IAppState {
  counter: number,
  value: any
}

const InitialState: IAppState = {
  counter: 0,
  value: null
}


export function appReducer(state: any = InitialState, action: any){
  console.log(action);
  if(action.type === 'INC') {
    return {...state, counter: state.counter + 1}
  }
  if(action.type === 'SET_VALUE') {
    return {...state, value: action.payload}
  }
  return state;
}


//Reducer Example
// [
//   {type: 'ACTION-1', payload: 1},
//   {type: 'ACTION-2', payload: 2}
// ]. reduce((state, action)=>{
//   if(action.type === 'ACTION-1'){
//     return {...state, val1: state.val1 + action.payload}
//   }
//   if(action.type === 'ACTION-2') {
//     return {...state, val2: state.val2 + action.payload}
//   }
//   return state

// }, {val1: 1, val2:2})
