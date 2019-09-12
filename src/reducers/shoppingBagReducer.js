export const shoppingBagInitialState = { orders: [] }

export default (state = shoppingBagInitialState, action) => {
  switch (action.type) {
    case 'SB_CLEAR':
      return shoppingBagInitialState
    default:
      return state
  }
}
