export function appReducer(state: any, action: any){
  console.log(action);
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
