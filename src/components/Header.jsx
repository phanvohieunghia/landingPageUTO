import React from 'react'
import Logouto from '../assets/img/logouto.png'
import DangKyNgay from '../assets/img/dangkingay.png'

const Header = () => {
  return (
    <section className="header">
      <div className="header-container">
        <div className="header-img">
          <img src={Logouto} alt='dont show' className="header-img__img" />
        </div>
        <div className="header-btn">
          <img src={DangKyNgay} alt='dont show' className="header-btn__btn" />
        </div>
      </div>
    </section>
  )
}

export default Header