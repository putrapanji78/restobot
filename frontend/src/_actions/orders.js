export const getOrders = (orders) => {
    return {
      type: 'GET_ORDERS',
      payload: {...orders, qty:1}
    }
  }
  
  export const deleteOrders = (orders) => {
    return {
      type: 'DELETE_ORDERS',
      payload: orders
    }
  }