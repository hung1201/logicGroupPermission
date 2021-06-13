import _ from "lodash";
import { actionAPI, initState } from "./data";

export const reducers = (state = actionAPI, action) => {
  switch(action.type) {
    case 'SET_INIT_STATE':
      return action.data
    case 'SET_CHECK':
      const copyState = JSON.parse(JSON.stringify(state))
      console.log('Group',action.group)
      copyState.forEach(item => {
        const groupList = action.group?.list
        groupList.forEach(gl => {
          if(gl.actionID === item.actionID){
            item.check[action.group?.role] = true
          }
        })
        console.log('groupList',groupList)
        // console.log('item',item)
        // console.log(item.actionID)
        // console.log(action.group?.actionID)
        // const newList = 
      })
      return copyState
    // case 'SET_ALL_ACTION':
    //   const newState = state.map((item)=> {
    //     return {
    //       ...item,
    //       list: action.data
    //     }
    //   })
    // return newState
    // case 'SET_CHECK':
    //     const copyState =  JSON.parse(JSON.stringify(state))
    //     const replace = copyState.map((item)=> {
    //         const role = action.group?.role
    //         if(item.role === role) {
    //             const newList = item?.list.map(il => action.group?.list.find(agl => agl.actionID === il.actionID)|| il)
    //             return {
    //                 ...item,
    //                 list : newList
    //             }
    //         }
    //         else return item
    //     })
    //     return replace

    default:
      return state
  }
}