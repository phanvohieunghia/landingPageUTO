import React from 'react'
import UTOLogo from '../assets/img/footer/uto.png'
import SaleLogo from '../assets/img/footer/123sale.png'
import StartEduLogo from '../assets/img/footer/edu.png'
import FacebookLogo from '../assets/img/footer/icon-fb.png'
import YoutubeLogo from '../assets/img/footer/icon-yt.png'
import ZaloLogo from '../assets/img/footer/icon-zalo.png'
import AppLogo from '../assets/img/footer/icon-gg-app.png'
import CallLogo from '../assets/img/footer/icon-call.png'
import MailLogo from '../assets/img/footer/icon-gmail.png'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-one">
          <img src={UTOLogo} className="footer-one__logo footer-one__logo-uto" alt="footer logo" />
          <img src={SaleLogo} className="footer-one__logo footer-one__logo-sale" alt="footer logo" />
          <img src={StartEduLogo} className="footer-one__logo footer-one__logo-edu" alt="footer logo" />
        </div>
        <div className="footer-two">
          <h4 className="footer-two__title footer-two__follow">Theo dõi chúng tôi:</h4>
          <div className="footer-two__logo-social">
            <img src={FacebookLogo} className="footer-two__logo footer-two__logo-facebook" alt="footer logo" />
            <img src={YoutubeLogo} className="footer-two__logo footer-two__logo-youtube" alt="footer logo" />
            <img src={ZaloLogo} className="footer-two__logo footer-two__logo-zalo" alt="footer logo" />
          </div>
          <div className="footer-two__logo-app">
            <img src={AppLogo} className="footer-two__logo-app-download" alt="footer logo" />
          </div>
          <h4 className=" footer-two__title footer-two__contact">Liên hệ để được tư vấn:</h4>
          <div className="footer-two__logo-contact">
            <img src={CallLogo} className="footer-two__logo footer-two__logo-call" alt="footer logo" />
            <img src={MailLogo} className="footer-two__logo footer-two__logo-mail" alt="footer logo" />
          </div>
        </div>

      </div>
      <div className="footer-copyright">
        <div className="footer-copyright__content">
          Bản Quyền @ 2022 thuộc Về UnionTek
          <br />
          UnionTek - Make your life simple
        </div>
      </div>
    </div>
  )
}

export default Footer