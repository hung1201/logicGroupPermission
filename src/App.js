import { useEffect, useReducer } from "react";

import {actionAPI, groupAPI, initState} from './data'
import { reducers } from "./reducers";
export default function App() {
  const [state, dispatch] = useReducer(reducers, actionAPI);
  const newActionAPI = [...actionAPI].map((item)=>{
    return {
      ...item,
      check:{
        'General Manager': false,
        'Branch Manager': false,
        'Local Manager':false,
        'Branch Assitance':false
      }
    }
  })
  // const newGroupAPI = [...groupAPI].map(item => {
  //   const setNewList = item.list.map(it => {
  //     return {
  //       ...it,
  //       check:true
  //     }
  //   })
  //   return {
  //     ...item,
  //     list: setNewList
  //   }
  // })
    useEffect(()=>{
    dispatch({
      type: 'SET_INIT_STATE',
      data: newActionAPI
    })
    groupAPI.forEach(item => (
      dispatch({
        type: 'SET_CHECK',
        group: item
      })
    ))
  },[])
  // useEffect(()=>{
  //   dispatch({
  //     type: 'SET_ALL_ACTION',
  //     data: newActionAPI
  //   })
  // },[])
  // useEffect(()=>{
  //   newGroupAPI.forEach((item)=> (
  //     dispatch({
  //       type: 'SET_CHECK',
  //       group: item,
  //     })
  //   ))
  // },[])
  // console.log('groupAPI',groupAPI)
// console.log(newActionAPI)
// console.log(state[0]?.list[0]?.check)
  console.log('state',state)
  return <div className="App">
    <span>Action</span>
    {
      state && state.map(item => (
        <div style={{display:'flex',flexDirection:'column'}}>
          <span>{item.name}</span>
          <div style={{marginLeft:20, display:'flex', flexDirection:'column'}}>
          <span>General Manager {state[item.actionID - 1]?.check?.['General Manager'] ? 'true' : 'false'}</span>
          <span>Local Manager {state[item.actionID - 1]?.check?.['Local Manager'] ? 'true' : 'false'}</span>
          <span>Branch Manager {state[item.actionID - 1]?.check?.['Branch Manager'] ? 'true' : 'false'}</span>
          </div>
        </div>
      ))
    }
  </div>;
}
