import React from 'react'

const DiscountItem = ({order, discount, remainder}) => {
  return (
    <div className="discountItem">
      <div className="discountItem__item discountItem-price">
        <div className="discountItem__content">
          {order} đơn/tháng
        </div>
      </div>
      <div className="discountItem__item discountItem-discount">
        <div className="discountItem__content">
          {discount} VNĐ
        </div>
      </div>
      <div className="discountItem__item discountItem-remainder">
        <div className="discountItem__content">
          {remainder} VNĐ/đơn
        </div>
      </div>
    </div>
  )
}

export default DiscountItem