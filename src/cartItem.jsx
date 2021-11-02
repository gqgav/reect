import React from 'react';

class CartItem extends React.Component {
  render () {
    const { qty, price, title } = this.props.product;
    const { product } = this.props;

    return (
      <div className="cart-item">
        <div className="left-block">
          <img
            style={{ height: 110, width: 110, borderRadius: 5, background: '#ccc' }}
            src={product.img}
          />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 25 }}> {title} </div>
          <div style={{ color: '#777' }}>{price}</div>
          <div style={{ color: '#777' }}>Qty: {qty}</div>
          <div className="cart-item-actions">
            <img 
              alt="add"
              src="https://cdn-icons.flaticon.com/png/512/1008/premium/1008978.png?token=exp=1635840859~hmac=b22d4f46cf0c53f7cdb0008267dd905a"
              className="action-icons"
              onClick={() => this.props.onIncreaseQuantity(product)}
            />
            <img
              alt="minus"
              src="https://cdn-icons.flaticon.com/png/512/2734/premium/2734848.png?token=exp=1635840928~hmac=021ba048cd2512d23b43987b741231af"
              className="action-icons"
              onClick={() => this.props.onDecreaseQuantity(product)}
            />
            <img
              alt="delete"
              src="https://cdn-icons.flaticon.com/png/512/4442/premium/4442016.png?token=exp=1635840954~hmac=22c4e287ad2e2c2adb696013f596d7d3"
              className="action-icons"
              onClick={() => this.props.onDeleteProduct(product.id)}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default CartItem;