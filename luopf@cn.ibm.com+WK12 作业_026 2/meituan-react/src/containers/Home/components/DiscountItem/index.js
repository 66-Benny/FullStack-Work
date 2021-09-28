import React, { Component } from 'react'
import './style.css'

class DiscountItem extends Component {
  render() {
    const {
      shop,
      tag,
      picture,
      currentPrice,
      oldPrice,
      saleDesc,
    } = this.props.data
    return (
      <div>
        <div className="discountItem_likeItem__picContainer">
          <div className="discountItem_likeItem__picTag">{tag}</div>
          <img alt="" className="discountItem_likeItem__pic" src={picture} />
        </div>
        <div className="discountItem_likeItem__content">
          <div className="discountItem_likeItem__shop">{shop}</div>
          <div className="discountItem_likeItem__detail">
            <div className="discountItem_likeItem__price">
              <ins className="discountItem_likeItem__currentPrice">
                {currentPrice}
              </ins>
              <del className="discountItem_likeItem__oldPrice">{oldPrice}</del>
            </div>
            <div className="discountItem_likeItem__sale">{saleDesc}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default DiscountItem
