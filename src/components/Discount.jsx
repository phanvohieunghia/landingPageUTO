import React from 'react'
import MoneyImg from '../assets/img/money.png'
import { default as Item } from './DiscountItem'
import PriceData from '../assets/data/price.json'

const Discount = () => {
  return (
    <section className="discount">
      <h1 className="discount-title">
        TIỆN ÍCH VÀ ƯU ĐÃI
      </h1>
      <div className="discount-container">
        <div className="discount-container__left">
          <div className="discount-container__left-content">
            <div className="discount-container__left-title">
              Chiết khấu hấp dẫn
            </div>
            Với số đơn hàng đặc được, quyền lợi của doanh nghiệp / cửa hàng sẽ được chiết khấu theo chính sách công ty
          </div>
        </div>
        <div className="discount-container__right">
          <img src={MoneyImg} alt="dont show" className="discount-container__right-img" />
        </div>
      </div>
      <div className="discount-price">
        <div className="discount-price__title-list">
          <div className="discount-price__title-item"></div>
          <div className="discount-price__title-item">
            <div className="discount-price__title-content">
              CHIẾT KHẤU
            </div>
          </div>
          <div className="discount-price__title-item">
            <div className="discount-price__title-content">
              <div>
              CÒN LẠI
              </div>
            </div>
          </div>
        </div>
        {
          PriceData.map((price, index) => {
            return (
              <Item
              key={index}
                order={price.order}
                discount={price.discount}
                remainder={price.remainder}
              />
              )
            })
        }
      </div>
    </section>
  )
}

export default Discount