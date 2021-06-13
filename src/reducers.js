import _ from "lodash";
import { initState } from "./data";

export const reducers = (state = initState, action) => {
  switch(action.type) {
    case 'SET_ALL_ACTION':
      const newState = state.map((item)=> {
        return {
          ...item,
          list: action.data
        }
      })
    return newState
    case 'SET_CHECK':
        const copyState =  JSON.parse(JSON.stringify(state))
        const replace = copyState.map((item)=> {
            const role = action.group?.role
            if(item.role === role) {
                const newList = item?.list.map(il => action.group?.list.find(agl => agl.actionID === il.actionID)|| il)
                return {
                    ...item,
                    list : newList
                }
            }
            else return item
        })
        return replace

    default:
      return state
  }
}