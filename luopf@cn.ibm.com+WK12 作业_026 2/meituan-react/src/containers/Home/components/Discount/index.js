import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DiscountItem from '../DiscountItem'
import './style.css'

class Discount extends Component {
  render() {
    const { data } = this.props
    return (
      <div className="discount">
        <a className="discount__header">
          <span className="discount__title">超值特惠</span>
          <span className="discount__more">更多优惠</span>
          <span className="discount__arrow" />
        </a>
        <div className="discount__content">
          {data.map((item) => {
            return (
              <Link
                key={item.id}
                to={`/detail/${item.id}`}
                className="discount__item"
              >
                <DiscountItem data={item} />
              </Link>
            )
          })}
        </div>
      </div>
    )
  }
}

export default Discount
