import React from 'react'
import './shoppingBag.css'
import { connect } from 'react-redux'
import ShoppingBagItem from '../../components/ShoppingBagItem'
import { removeItemFromBag } from '../../actions'

export const ShoppingBag = ({ orders, removeItemFromBag }) => {
  const onRemove = e => removeItemFromBag(e.currentTarget.dataset.index)
  return (
    <>
      {orders.length ? (
        <div>
          {orders.map((item, index) => (
            <ShoppingBagItem
              key={item.id}
              item={item}
              onRemove={onRemove}
              index={index}
            />
          ))}
        </div>
      ) : (
        <div>No items in the bag yet</div>
      )}
    </>
  )
}

const mapStateToProps = state => ({
  orders: state.shoppingBagReducer.orders,
})

const mapDispatchToProps = dispatch => ({
  removeItemFromBag: removeItemFromBag(dispatch),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShoppingBag)
