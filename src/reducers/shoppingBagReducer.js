import { shoppingBagActions } from '../actions'

export const shoppingBagInitialState = { orders: [] }

export default (state = shoppingBagInitialState, action) => {
  switch (action.type) {
    case shoppingBagActions.ADD_ITEM_TO_BAG:
      return {
        ...state,
        orders: state.orders.concat(action.payload),
      }
    default:
      return state
  }
}
