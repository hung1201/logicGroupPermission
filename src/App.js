import { useEffect, useReducer } from "react";

import {actionAPI, groupAPI, initState} from './data'
import { reducers } from "./reducers";
export default function App() {
  const [state, dispatch] = useReducer(reducers, initState);
  const newActionAPI = [...actionAPI].map((item)=>{
    return {
      ...item,
      check:false
    }
  })
  const newGroupAPI = [...groupAPI].map(item => {
    const setNewList = item.list.map(it => {
      return {
        ...it,
        check:true
      }
    })
    return {
      ...item,
      list: setNewList
    }
  })
  useEffect(()=>{
    dispatch({
      type: 'SET_ALL_ACTION',
      data: newActionAPI
    })
  },[])
  useEffect(()=>{
    newGroupAPI.forEach((item)=> (
      dispatch({
        type: 'SET_CHECK',
        group: item,
      })
    ))
  },[])


  console.log('newGroupAPI',newGroupAPI)
// console.log(newActionAPI)
  console.log('state',state)
  return <div className="App">
    {
      state && state.map((stateItem)=> {
        const layout = stateItem.list.map((listItem)=> (
          <span style={{marginRight:5}} key={listItem.name}>{listItem.name}_{listItem.check ? 'true' : 'false'}-------------</span>
        ))
        return (
          <div key={stateItem.role} style={{display:'flex',flexDirection:'column'}}>
            <span>Role: {stateItem.role}</span>
            <div>
              <p>{layout}</p> 
            </div>
          </div>
        )
      })
    }
  </div>;
}
