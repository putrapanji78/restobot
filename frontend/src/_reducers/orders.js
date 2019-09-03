const initialState =[]
  
  const orders = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ORDERS' : 
      if(state.length==0){
        return [...state,action.payload]
      }else{
          for(var index=0; index<state.length; index++){
              if(state[index].id==action.payload.id){
                  state[index]={...state[index], qty: state[index].qty+1}
                  return state
              }
          }
          return [...state,action.payload]
      }
      
      case 'DELETE_ORDERS':
      for(var index=0; index<state.length; index++){
          if(state[index].id==action.payload){
              if(state[index].qty>1){
                  state[index]={...state[index],qty:state[index].qty-1}
                  return state
              }else{
                    return state.filter(array=>
                        array.id!=action.payload
                        )
              }
          }
      }
      default:
        return state;
    }
  }
  
  export default orders;