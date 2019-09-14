import React from 'react'
import './shoppingBag.css'
import { connect } from 'react-redux'

export const ShoppingBag = ({ orders }) => (
  <>
    {orders.length ? (
      <div>
        {orders.map(item => (
          <div key={item.product.name + item.quantity}>
            You bought: {item.quantity} {item.product.name}
          </div>
        ))}
      </div>
    ) : (
      <div>No items in the bag yet</div>
    )}
  </>
)

const mapStateToProps = state => ({
  orders: state.shoppingBagReducer.orders,
})

export default connect(mapStateToProps)(ShoppingBag)
